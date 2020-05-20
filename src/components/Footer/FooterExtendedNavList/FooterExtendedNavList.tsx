import React, { useState, useEffect } from 'react'
import classnames from 'classnames'
import { NavList } from '../../header/NavList/NavList'

export type ExtendedNavLinksType = React.ReactNode[][]

type FooterExtendedNavListProps = {
  /* 
    Multidimensional array of grouped nav links. Sub-arrays are column sections, first element is used as a heading.
  */
  nestedLinks: ExtendedNavLinksType
}

export const FooterExtendedNavList = ({
  className,
  nestedLinks,
}: FooterExtendedNavListProps &
  React.HTMLAttributes<HTMLElement>): React.ReactElement => {
  const classes = classnames('grid-row grid-gap-4', className)

  const [isMobile, setIsMobile] = React.useState(false)
  const [sectionsOpenState, setSectionsOpenState] = useState<boolean[]>(
    Array(nestedLinks.length).fill(false)
  )

  useEffect(() => {
    const isClient = window && typeof window === 'object'
    if (!isClient) return

    function handleResize(): void {
      const isMobileWidth = window.innerWidth < 480
      setIsMobile(isMobileWidth)
    }

    handleResize()

    window.addEventListener('resize', handleResize)
    return (): void => window.removeEventListener('resize', handleResize)
  }, [])

  const onToggle = (index: number): void => {
    setSectionsOpenState((prevIsOpen) => {
      const newIsOpen = Array(nestedLinks.length).fill(false)
      // eslint-disable-next-line security/detect-object-injection
      newIsOpen[index] = !prevIsOpen[index]
      return newIsOpen
    })
  }

  return (
    <div className={classes}>
      {nestedLinks.map((links, i) => (
        <div
          key={`linkSection-${i}`}
          className="mobile-lg:grid-col-6 desktop:grid-col-3">
          <Section
            onToggle={isMobile ? (): void => onToggle(i) : undefined}
            // eslint-disable-next-line security/detect-object-injection
            isOpen={isMobile ? sectionsOpenState[i] : true}
            links={links}
          />
        </div>
      ))}
    </div>
  )
}

const Section = ({
  isOpen = false,
  links,
  onToggle,
}: {
  isOpen: boolean
  links: React.ReactNode[]
  onToggle?: () => void
}): React.ReactElement => {
  const primaryLinkOrHeading = links[0]
  const secondaryLinks = links.slice(1)
  const classes = classnames(
    'usa-footer__primary-content usa-footer__primary-content--collapsible',
    { hidden: !isOpen }
  )

  return (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    <section className={classes} onClick={onToggle} onKeyPress={onToggle}>
      <h4 className="usa-footer__primary-link">{primaryLinkOrHeading}</h4>
      <NavList footerSecondary items={secondaryLinks} />
    </section>
  )
}
