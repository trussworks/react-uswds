interface IdentifierCopyMap {
  ariaLabel: string
  usaGovDescription: string
  visitGovUrl: string
  visitGovCopy: string
}

const copyMap: Record<'english' | 'spanish', IdentifierCopyMap> = {
  english: {
    ariaLabel: 'U.S. government information and services',
    usaGovDescription: 'Looking for U.S. government information and services?',
    visitGovUrl: 'https://www.usa.gov/',
    visitGovCopy: 'Visit USA.gov',
  },
  spanish: {
    ariaLabel: 'Información y servicios del Gobierno de EE. UU.',
    usaGovDescription: '¿Necesita información y servicios del Gobierno?',
    visitGovUrl: 'https://www.usa.gov/espanol/',
    visitGovCopy: 'Visite USAGov en Español',
  },
}

export default copyMap
