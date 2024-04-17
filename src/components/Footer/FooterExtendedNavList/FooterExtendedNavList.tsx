import React, { useState, useEffect } from 'react'
import classnames from 'classnames'
import FooterExtendedNavListSection from './FooterExtendedNavListSection'

export type ExtendedNavLinksType = React.ReactNode[][]

export type FooterExtendedNavListProps = {
  isMobile?: boolean
  /* 
    Turn on mobile styles via prop. If undefined, a fallback is used based on the client window width.
  */
  /* 
    Multidimensional array of grouped nav links. Sub-arrays are column sections, first element is used as a heading.
  */
  nestedLinks: ExtendedNavLinksType
} & React.HTMLAttributes<HTMLElement>

const FooterExtendedNavList = ({
  className,
  isMobile,
  nestedLinks,
}: FooterExtendedNavListProps): React.ReactElement => {
  const classes = classnames('grid-row grid-gap-4', className)
  const isClient = window && typeof window === 'object'

  const [isMobileFallback, setIsMobileFallback] = React.useState<boolean>(
    isClient && window.innerWidth < 480
  )
  const [sectionsOpenState, setSectionsOpenState] = useState<boolean[]>(
    Array(nestedLinks.length).fill(false)
  )

  // Use isMobile prop, fallback to calculated state if undefined
  const useMobile = isMobile || (isMobile === undefined && isMobileFallback)

  useEffect(() => {
    if (isMobile) return

    function handleResize(): void {
      const updatedIsMobileFallback = isClient && window.innerWidth < 480
      if (updatedIsMobileFallback !== isMobileFallback) {
        setIsMobileFallback(updatedIsMobileFallback)
      }
    }

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
          <FooterExtendedNavListSection
            onToggle={useMobile ? (): void => onToggle(i) : undefined}
            // eslint-disable-next-line security/detect-object-injection
            isOpen={useMobile ? sectionsOpenState[i] : true}
            links={links}
          />
        </div>
      ))}
    </div>
  )
}

export default FooterExtendedNavList
