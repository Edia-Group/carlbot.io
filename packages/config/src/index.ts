import { MultipartUpload } from "@effect-aws/s3";
import {
  Config,
  Context,
  Effect,
  Layer,
  Option,
  Redacted,
  Schema,
} from "effect";

const WorkflowsRpcClientConfigSchema = Config.all({
  rpcUrl: Config.url("WORKFLOWS_RPC_URL").pipe(Config.option),
  rpcSecret: Config.redacted(Config.string("WORKFLOWS_RPC_SECRET")),
});

export class WorkflowsRpcClientConfig extends Context.Tag(
  "@typebot/WorkflowsRpcClientConfig",
)<
  WorkflowsRpcClientConfig,
  Config.Config.Success<typeof WorkflowsRpcClientConfigSchema>
>() {
  static readonly layer = Layer.effect(
    WorkflowsRpcClientConfig,
    WorkflowsRpcClientConfigSchema,
  );
}

const WorkflowsServerConfigSchema = Config.all({
  port: Config.number("WORKFLOWS_SERVER_PORT").pipe(Config.withDefault(3000)),
  rpcSecret: Config.redacted(Config.string("WORKFLOWS_RPC_SECRET")),
});

export class WorkflowsServerConfig extends Context.Tag(
  "@typebot/WorkflowsServerConfig",
)<
  WorkflowsServerConfig,
  Config.Config.Success<typeof WorkflowsServerConfigSchema>
>() {
  static readonly layer = Layer.effect(
    WorkflowsServerConfig,
    WorkflowsServerConfigSchema,
  );
}

const WorkflowsDatabaseConfigSchema = Config.all({
  databaseUrl: Config.redacted(Config.string("WORKFLOWS_DATABASE_URL")),
});

export class WorkflowsDatabaseConfig extends Context.Tag(
  "@typebot/WorkflowsDatabaseConfig",
)<
  WorkflowsDatabaseConfig,
  Config.Config.Success<typeof WorkflowsDatabaseConfigSchema>
>() {
  static readonly layer = Layer.effect(
    WorkflowsDatabaseConfig,
    WorkflowsDatabaseConfigSchema,
  );
}

const NextAuthConfigSchema = Config.all({
  nextAuthUrl: Config.url("NEXTAUTH_URL"),
});

export class NextAuthConfig extends Context.Tag("@typebot/NextAuthConfig")<
  NextAuthConfig,
  Config.Config.Success<typeof NextAuthConfigSchema>
>() {
  static readonly layer = Layer.effect(NextAuthConfig, NextAuthConfigSchema);
}

export class S3ReadableConfig extends Context.Tag("@typebot/S3ReadableConfig")<
  S3ReadableConfig,
  {
    bucket: string;
  }
>() {}

export const S3ConfigLayer = Layer.unwrapEffect(
  Effect.gen(function* () {
    const s3Config = yield* Effect.all({
      accessKey: Schema.Config(
        "S3_ACCESS_KEY",
        Schema.Redacted(Schema.String),
      ).pipe(Config.option),
      secretKey: Schema.Config(
        "S3_SECRET_KEY",
        Schema.Redacted(Schema.String),
      ).pipe(Config.option),
      endpoint: Schema.Config("S3_ENDPOINT", Schema.String).pipe(Config.option),
      port: Schema.Config("S3_PORT", Schema.NumberFromString).pipe(Config.option),
      region: Schema.Config("S3_REGION", Schema.String).pipe(Config.withDefault("us-east-1")).pipe(Config.option),
      bucket: Schema.Config("S3_BUCKET", Schema.String).pipe(Config.option),
      ssl: Schema.Config("S3_SSL", Schema.BooleanFromString).pipe(Config.withDefault(true)).pipe(Config.option),
    });

    // If S3 is not configured, provide a minimal readable config
    if (Option.isNone(s3Config.accessKey) || Option.isNone(s3Config.secretKey) || Option.isNone(s3Config.endpoint)) {
      return Layer.succeed(S3ReadableConfig, { bucket: "default-bucket" });
    }

    return Layer.mergeAll(
      Layer.succeed(S3ReadableConfig, { bucket: Option.getOrElse(s3Config.bucket, () => "default-bucket") }),
      MultipartUpload.layer({
        endpoint: `http${Option.getOrElse(s3Config.ssl, () => true) ? "s" : ""}://${Option.getOrThrow(s3Config.endpoint)}${s3Config.port.pipe(Option.match({ onNone: () => "", onSome: (p) => `:${p}` }))}`,
        region: Option.getOrElse(s3Config.region, () => "us-east-1"),
        credentials: {
          accessKeyId: Redacted.value(Option.getOrThrow(s3Config.accessKey)),
          secretAccessKey: Redacted.value(Option.getOrThrow(s3Config.secretKey)),
        },
        forcePathStyle: true,
      }),
    );
  }),
);
