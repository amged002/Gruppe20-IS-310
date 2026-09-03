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
    role: 'Fullstack-utvikler',
    description:'Jeg heter Amgad Mohamed og studerer IT og informasjonssystemer ved Universitetet i Agder. Jeg er spesielt interessert i programmering, systemutvikling og hvordan teknologi kan brukes til å utvikle praktiske og brukervennlige løsninger.\n' +
        '\n' +
        'Gjennom studiet har jeg fått erfaring med programmering, webutvikling, databaser og utvikling av informasjonssystemer. Jeg liker å lære nye teknologier og trives godt med problemløsning og samarbeid med andre.\n' +
        '\n' +
        'Jeg har også erfaring fra sikkerhet, kundeservice og praktisk arbeid. Dette har gitt meg gode ferdigheter innen kommunikasjon, ansvar og samarbeid, som jeg ønsker å ta med meg videre i IT-prosjekter.',
    image: '/Amged.jpeg',
    github: 'https://github.com/amged002',
    linkedin: 'https://www.linkedin.com/in/amgad-mohamed-59811525b/',
  },
  {
    name: 'Storm Haukom',
    role: 'Backend-utvikler',
    description: 'Jeg er 22 år gammel, født og oppvokst i Kongsberg. Jeg studerer IT og informasjonssystemer ved UiA, samtidig som jeg jobber deltid som Technical Assistant hos Kongsberg Maritime.\n' +
        '\n' +
        'Hos Kongsberg Maritime jobber jeg i avdelingen for Dynamic Positioning (DP), hvor jeg blant annet arbeider med oppsett og konfigurering av datamaskiner, feilsøking, testing og problemløsing. Gjennom jobben får jeg praktisk erfaring med IT i et teknisk og maritimt miljø, og innblikk i hvordan komplekse teknologiske systemer utvikles, testes og vedlikeholdes.\n' +
        '\n' +
        'På fritiden har jeg stor interesse for kunstig intelligens, gaming, musikk og teknologi generelt. Jeg er spesielt interessert i hvordan ny teknologi kan brukes til å løse problemer, effektivisere arbeidsprosesser og skape nye muligheter.',
    image: '/Storm.jpeg',
    github: 'https://github.com/Storm300',
    linkedin: '',
  },
  {
    name: 'Joachim Stephen Benning',
    role: 'Backend-utvikler',
    description: 'Legg inn din beskrivelse her. Fortell litt om deg selv, dine ferdigheter og interesser.',
    image: '/Joachim.jpeg',
    github: '',
    linkedin: '',
  },
  {
    name: 'Medlem 4',
    role: 'Frontend-utvikler',
    description:
        'Jeg er en målrettet og ambisiøs IT-student som legger mye tid og innsats i studiene for å utvikle meg faglig og bygge solid kompetanse innen IT. Jeg er lærevillig og liker å utfordre meg selv til å stadig bli bedre.\n\n' +
        'På fritiden har jeg en aktiv og sosial livsstil, og bruker mye tid med familie og venner. Styrketrening er også en stor del av hverdagen min og har lært meg disiplin, struktur og viktigheten av å være konsekvent for å nå målene mine. Jeg liker å ha klare mål og jobbe målrettet for å nå dem. Målet mitt er å få god erfaring innen IT, ta ansvar og bygge en sterk karriere hvor jeg kan bruke kunnskapen min til å skape verdi.',
    image: '/Yousef.jpeg',
    github: '',
    linkedin: '',
  },
  {
    name: 'Marius R. Kristiansen',
    role: 'Frontend-utvikler',
    description: 'Legg inn din beskrivelse her. Fortell litt om deg selv, dine ferdigheter og interesser.',
    image: '/Marius.jpeg',
    github: '',
    linkedin: '', 
  },
  {
    name: 'Filip Aulid',
    role: 'Frontend-utvikler',
    description: 'Jeg heter Filip Nicolai Aulid og er 22 år gammel fra Asker. Jeg studerer IT og informasjonssystemer ved Universitetet i Agder. Gjennom studiet har jeg fått erfaring med blant annet programmering, databaser, webutvikling og ulike IT-prosjekter. Jeg synes det er interessant å jobbe med problemløsning og se hvordan en idé kan utvikles til en fungerende løsning. Jeg liker også å lære gjennom praktisk arbeid og prøve meg frem med nye teknologier.\n' +
        '\n' +
        'Jeg har tidligere jobbet innen salg og distribusjon, noe som har gitt meg erfaring med samarbeid, ansvar og strukturert arbeid. I prosjektgruppen ønsker jeg å bidra med utvikling, idearbeid, skriving og kvalitetssikring, samtidig som jeg ønsker å videreutvikle de tekniske ferdighetene mine.',
    image: '/Filip.jpeg',
    github: 'https://github.com/Nico-au03',
    linkedin: 'https://www.linkedin.com/in/filip-aulid-5a78ab327',
  },
];
