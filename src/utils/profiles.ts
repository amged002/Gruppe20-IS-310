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
    description: '\n' +
        '\n' +
        'Jeg heter Amgad Mohamed og studerer IT og informasjonssystemer ved Universitetet i Agder. Jeg er spesielt interessert i programmering, systemutvikling og hvordan teknologi kan brukes til å utvikle praktiske og brukervennlige løsninger.\n' +
        '\n' +
        'Gjennom studiet har jeg fått erfaring med blant annet programmering, webutvikling, databaser og utvikling av informasjonssystemer. Jeg liker å lære nye teknologier og trives godt med praktisk problemløsning og samarbeid med andre.\n' +
        '\n' +
        'Jeg har også erfaring fra sikkerhet, kundeservice og praktisk arbeid, noe som har gitt meg gode ferdigheter innen kommunikasjon, ansvar og samarbeid.\n',
    image: 'src/assets/images/Amged.jpeg',
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
    description: 'Legg inn din beskrivelse her. Fortell litt om deg selv, dine ferdigheter og interesser.',
    image: '',
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
