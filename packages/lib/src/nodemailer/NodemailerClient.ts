import { Config, Context, Effect, Layer, Option, Redacted, Schema } from "effect";
import { createTransport, type SendMailOptions } from "nodemailer";

export class NodemailerError extends Schema.TaggedError<NodemailerError>()(
  "@typebot/NodemailerError",
  {
    cause: Schema.optional(Schema.Unknown),
  },
) {}

export class NodemailerClient extends Context.Tag("@typebot/NodemailerClient")<
  NodemailerClient,
  {
    sendMail: (
      options: SendMailOptions,
    ) => Effect.Effect<void, NodemailerError>;
  }
>() {}

export const NodemailerClientLayer = Layer.unwrapEffect(
  Effect.gen(function* () {
    const smtpConfig = yield* Effect.all({
      host: Config.string("SMTP_HOST").pipe(Config.option),
      port: Config.port("SMTP_PORT").pipe(Config.withDefault(25)).pipe(Config.option),
      username: Config.string("SMTP_USERNAME").pipe(Config.option),
      password: Config.redacted("SMTP_PASSWORD").pipe(Config.option),
      secure: Config.boolean("SMTP_SECURE").pipe(Config.withDefault(false)).pipe(Config.option),
      ignoreTLS: Config.boolean("SMTP_IGNORE_TLS").pipe(Config.withDefault(undefined)).pipe(Config.option),
      from: Config.string("NEXT_PUBLIC_SMTP_FROM").pipe(Config.option),
    });

    // If SMTP is not configured, provide a no-op client
    if (Option.isNone(smtpConfig.host) || Option.isNone(smtpConfig.username) || Option.isNone(smtpConfig.password)) {
      return Layer.succeed(NodemailerClient, {
        sendMail: (options: SendMailOptions) => Effect.void,
      });
    }

    const transport = createTransport(
      {
        host: Option.getOrThrow(smtpConfig.host),
        port: Option.getOrElse(smtpConfig.port, () => 25),
        secure: Option.getOrElse(smtpConfig.secure, () => false),
        ignoreTLS: Option.getOrElse(smtpConfig.ignoreTLS, () => undefined),
        auth: {
          user: Option.getOrThrow(smtpConfig.username),
          pass: Redacted.value(Option.getOrThrow(smtpConfig.password)),
        },
      },
      {
        from: Option.getOrElse(smtpConfig.from, () => "noreply@leadbot.it"),
      },
    );

    return Layer.succeed(NodemailerClient, {
      sendMail: (options: SendMailOptions) =>
        Effect.tryPromise({
          try: () => transport.sendMail(options),
          catch: (error) => new NodemailerError({ cause: error }),
        }),
    });
  }),
);
