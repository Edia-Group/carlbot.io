# LeadBot.io - Strategia Go-to-Market

> **Data creazione**: 2026-02-12  
> **Dominio scelto**: leadbot.it  
> **Base**: Fork di Typebot.io (FSL-1.1-Apache-2.0 License)

---

## 🎯 Macrocategoria Target

**"Professionisti e Agenzie di Servizi Locali"**

### Sottocategorie comprese:
- 🏠 Agenzie immobiliari
- ⚖️ Studi legali e avvocati
- 📊 Commercialisti e consulenti fiscali/lavoro
- 🛡️ Assicurazioni e consulenti finanziari
- ✈️ Agenzie di viaggio e turismo locale
- 🏥 Studi medici/dentistici e professionisti sanitari (in misura minore)

### Perché funziona:
1. **Pain point unificato**: Tutti hanno lo stesso problema - generare lead qualificati, fissare appuntamenti, gestire follow-up e inviare documenti
2. **Mercato enorme**: Centinaia di migliaia di partite IVA in Italia
3. **Template riutilizzabili**: Stesso flow con piccole personalizzazioni per nicchia → efficienza alta
4. **Posizionamento chiaro**: *"Il chatbot flow per professionisti che vogliono più appuntamenti senza perdere tempo al telefono"*

---

## 🏷️ Brand Identity

### Dominio Ufficiale
**leadbot.it**

### Alternative Valutate (non utilizzate)
| Nome | .it disponibile | Nota |
|------|----------------|------|
| ConversaPro.it | Sì | Profesionale, conversazione + pro |
| LeadFlow.it | Sì | Lead + flow builder |
| FlowAgent.it | Sì | Moderno, tecnico |
| AppuntaBot.it | Sì | Molto chiaro per nicchia appuntamenti |
| ProChat.it | Sì | Breve e diretto |
| ProFlow.it | Sì | Breve e diretto |
| ServiziFlow.it | Sì | Più ampio, servizi locali |

### Slogan Candidati
1. *"Chatbot intelligenti per professionisti che vogliono più clienti"*
2. *"Dal lead all'appuntamento in automatico"*
3. *"Il flow builder per studi e agenzie italiane"*
4. *"Più appuntamenti, meno telefonate"*

---

## ✨ Feature Roadmap per Nicchia

### Core (MVP - Da avere subito)

| Feature | Priorità | Stato | Descrizione |
|---------|----------|-------|-------------|
| Template "Agenzia Immobiliare" | 🔴 Alta | ⬜ Da fare | Qualificazione lead immobiliare completa |
| Template "Studio Legale" | 🔴 Alta | ⬜ Da fare | Intake clienti, prima consulenza |
| Template "Commercialista" | 🔴 Alta | ⬜ Da fare | Raccolta documenti, appuntamento |
| WhatsApp Business API | 🔴 Alta | ⚠️ Parziale | Priorità assoluta per mercato italiano |
| Sync Calendario | 🔴 Alta | ⬜ Da fare | Google Calendar, Outlook, Calendly |
| Lead Scoring | 🟡 Media | ⬜ Da fare | Budget, zona, tipologia, urgenza |
| Invio Documenti | 🟡 Media | ⬜ Da fare | Automatico + firma elettronica (Namirial/Aruba) |

### Feature Differenzianti (Competitive Advantage)

| Feature | Priorità | Stato | Descrizione |
|---------|----------|-------|-------------|
| Tour Virtuali / Gallery | 🟡 Media | ⬜ Da fare | Specifico immobiliare ma utile studi medici |
| Follow-up Automatico | 🔴 Alta | ⬜ Da fare | Se non risponde in 48h → messaggio/email |
| CRM Italiani | 🟡 Media | ⬜ Da fare | TeamSystem, Zucchetti, Danea, Salesforce base |
| Report Lead + Excel Export | 🟢 Bassa | ⚠️ Parziale | Esportazione risultati già presente, migliorare UI |
| White-label | 🔴 Alta | ⚠️ Parziale | Per agenzie che rivendono (CSS custom già c'è) |
| Multilingua Italiano/Inglese | 🟡 Media | ⬜ Da fare | Supporto completo IT locale |

---

## 💰 Modello di Pricing

### Pacchetto di Offerta

```
SETUP BASE
├── Template nicchia scelta
├── Configurazione WhatsApp Business
├── Sync calendario
├── 3 revisioni incluse
└── Training 1h team cliente
    
    Prezzo: €250-450 (one-time)

MANUTENZIONE MENSILE
├── Hosting e infrastruttura
├── Aggiornamenti piattaforma
├── Supporto tecnico base
├── Analytics mensili
└── 2 modifiche flusso/mese
    
    Prezzo: €39-79/mese (recurring)

ENTERPRISE (per agenzie/franchising)
├── Multi-workspace
├── White-label completo
├── API access
├── Supporto prioritario
└── SLA garantito
    
    Prezzo: €199+/mese
```

---

## 🚀 Prossimi Passi Concreti

1. **Caso Studio Pilota**: Proporre al cliente immobiliare attuale versione "beta dedicata" a prezzo scontato in cambio di testimonianza e feedback
2. **Template Base**: Creare 3 template base per le 3 nicchie principali
3. **Rebranding Completo**: Cambiare tutti i riferimenti Typebot → LeadBot
4. **Landing Page**: Scrivere copy specifico per professionisti italiani
5. **Integrazioni Locali**: Priorità a CRM e tool italiani

---

## 📋 Note tecniche rebranding

### File da modificare:
- `package.json` - nome root
- `apps/landing-page/` - contenuto e brand
- `apps/builder/` - titolo, favicon, logo
- `apps/viewer/` - embed branding
- `packages/emails/` - email templates
- `packages/templates/` - template descriptions
- `README.md` - documentazione pubblica
- `.env.example` - default values
- Docker configs - container names

### Assets necessari:
- Logo LeadBot (SVG + PNG)
- Favicon
- Banner/Badge per GitHub
- Color palette (primary, secondary)
- Font family

---

*Documento vivo - aggiornare con decisioni strategiche future*
