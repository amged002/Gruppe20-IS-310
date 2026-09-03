export interface Profile {
  name: string;
  role: string;
  description: string;
  image?: string;
  github?: string;
  linkedin?: string;
}

export const profiles: Profile[] = [
  {
    name: 'Amgad Mohamed',
    role: 'Rolle / Tittel',
    description:
        'Jeg heter Amgad Mohamed og studerer IT og informasjonssystemer ved Universitetet i Agder. Jeg er spesielt interessert i programmering, systemutvikling og hvordan teknologi kan brukes til å utvikle praktiske og brukervennlige løsninger.\n\n' +
        'Gjennom studiet har jeg fått erfaring med programmering, webutvikling, databaser og utvikling av informasjonssystemer. Jeg liker å lære nye teknologier og trives godt med problemløsning og samarbeid med andre.\n\n' +
        'Jeg har også erfaring fra sikkerhet, kundeservice og praktisk arbeid, noe som har gitt meg gode ferdigheter innen kommunikasjon, ansvar og samarbeid.',
     image: '/Amged.jpeg',
    github: 'https://github.com/amged002',
    linkedin: 'https://www.linkedin.com/in/amgad-mohamed-59811525b/',
  },
  {
    name: 'Medlem 2',
    role: 'Rolle / Tittel',
    description: 'Legg inn din beskrivelse her. Fortell litt om deg selv, dine ferdigheter og interesser.',
    image: '',
    github: '',
    linkedin: '',
  },
  {
    name: 'Medlem 3',
    role: 'Rolle / Tittel',
    description: 'Legg inn din beskrivelse her. Fortell litt om deg selv, dine ferdigheter og interesser.',
    image: '',
    github: '',
    linkedin: '',
  },
  {
    name: 'Medlem 4',
    role: 'Rolle / Tittel',
    description:
        'Jeg er en målrettet og ambisiøs IT-student som legger mye tid og innsats i studiene for å utvikle meg faglig og bygge solid kompetanse innen IT. Jeg er lærevillig og liker å utfordre meg selv til å stadig bli bedre.\n\n' +
        'På fritiden har jeg en aktiv og sosial livsstil, og bruker mye tid med familie og venner. Styrketrening er også en stor del av hverdagen min og har lært meg disiplin, struktur og viktigheten av å være konsekvent for å nå målene mine. Jeg liker å ha klare mål og jobbe målrettet for å nå dem. Målet mitt er å få god erfaring innen IT, ta ansvar og bygge en sterk karriere hvor jeg kan bruke kunnskapen min til å skape verdi.',
    image: '/Yousef.jpeg',
    github: '',
    linkedin: '',
  },
  {
    name: 'Medlem 5',
    role: 'Rolle / Tittel',
    description: 'Legg inn din beskrivelse her. Fortell litt om deg selv, dine ferdigheter og interesser.',
    image: '',
    github: '',
    linkedin: '',
  },
  {
    name: 'Medlem 6',
    role: 'Rolle / Tittel',
    description: 'Legg inn din beskrivelse her. Fortell litt om deg selv, dine ferdigheter og interesser.',
    image: '',
    github: '',
    linkedin: '',
  },
];
