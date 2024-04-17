import { ExtendedNavLinksType } from '../FooterExtendedNavList/FooterExtendedNavList'

export function isExtendedNavLinks(
  links: React.ReactNode[] | ExtendedNavLinksType
): links is ExtendedNavLinksType {
  return (links as ExtendedNavLinksType)[0].constructor === Array
}
