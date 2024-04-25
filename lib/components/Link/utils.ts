import classnames from 'classnames'
import { DefaultLinkProps, CustomLinkProps, StyledLinkProps } from './Link.js'

export function isCustomProps<T>(
  props: DefaultLinkProps | CustomLinkProps<T>
): props is CustomLinkProps<T> {
  return 'asCustom' in props
}
// keyboard handler for 'link as a button'
export const handleKeyDown = (e: React.KeyboardEvent) => {
  if (e.key === ' ' && e.target) {
    e.preventDefault()
    ;(e.target as HTMLElement).click()
  }
}

export function linkClasses<T>(
  variant: StyledLinkProps<T>['variant'],
  className: StyledLinkProps<T>['className']
): string | undefined {
  const unstyled = variant === 'unstyled'
  const isExternalLink = variant === 'external'
  const isNavLink = variant === 'nav'

  return unstyled
    ? className
    : classnames(
        'usa-link',
        { 'usa-link--external': isExternalLink, 'usa-nav__link': isNavLink },
        className
      )
}
