# Gruppe 20 IS-310 Bachelor Profiling Website

Velkommen til vår Bachelor profileringswebsite! Dette er en web-applikasjon som presenterer vår gruppe og viser profiler for alle medlemmene.

## Teknologier brukt

| Teknologi | Formål |
|-----------|--------|
| React | Frontend rammeverk |
| TypeScript | Type-safe JavaScript |
| Vite | Build tool og dev server |
| CSS | Styling og layout |
| Vercel | Hosting og deployment |

## Getting Started

Følg disse stegene for å kjøre prosjektet lokalt:

### 1. Klon repositoryet

```bash
git clone https://github.com/amged002/Gruppe20-IS-310.git
cd Gruppe20-IS-310
```

### 2. Installer dependencies

```bash
npm install
```

### 3. Start development serveren

```bash
npm run dev
```

Applikasjonen kjører nå på `http://localhost:5173`

## Hvordan legge inn informasjon

### Legge til profilbilde

1. Legg bildene dine i `src/assets/images/` mappen
2. Åpne `src/utils/profiles.ts`
3. Endre `image` feltet til sti til bildet ditt:
   ```typescript
   image: '/src/assets/images/dittbilde.jpg',
   ```

### Oppdatere profil informasjon

Åpne `src/utils/profiles.ts` og fyll inn:
- `name` - Ditt navn
- `role` - Din rolle/tittel
- `description` - Din beskrivelse
- `github` - Link til GitHub-profilen din
- `linkedin` - Link til LinkedIn-profilen din

Eksempel:

```typescript
{
  name: 'Arne Andersen',
  role: 'Backend Developer',
  description: 'Jeg er en passionert backend-utvikler med interesse for cloud-løsninger og microservices.',
  image: '/src/assets/images/arne.jpg',
  github: 'https://github.com/arneandersen',
  linkedin: 'https://linkedin.com/in/arneandersen',
}
```

## Build for production

```bash
npm run build
```

## Deploy til Vercel

1. Gå til [vercel.com](https://vercel.com)
2. Logg inn eller opprett konto
3. Klikk "New Project"
4. Velg GitHub repositoryet ditt
5. Klikk "Deploy"

Vercel vil automatisk deployere hver gang dere pusher til `main` branchen!

## Fil struktur

```
Gruppe20-IS-310/
├── src/
│   ├── App.tsx           # Hovedkomponent
│   ├── App.css           # App styling
│   ├── index.css         # Global styling
│   ├── main.tsx          # Entry point
│   ├── utils/
│   │   └── profiles.ts   # Profil data - REDIGER DENNE!
│   └── assets/
│       └── images/       # Legg bildene dine her
├── index.html            # HTML template
├── package.json          # Dependencies
├── tsconfig.json         # TypeScript config
├── vite.config.ts        # Vite config
└── README.md             # This file
```

## Tips

- Bildeformat: PNG eller JPG
- Bildestørrelse: ~500x500px for best resultat
- Bruk høy kvalitet på bildene
- Gjør beskrivelsene korte og konsise (2-3 setninger)
- Test lokalt før dere pusher til GitHub

Lykke til! 🚀
