import React from 'react'
import classnames from 'classnames'
import NavList from '../../header/NavList/NavList'

export type FooterExtendedNavListSectionProps = {
  isOpen: boolean
  links: React.ReactNode[]
  onToggle?: () => void
}

const FooterExtendedNavListSection = ({
  isOpen = false,
  links,
  onToggle,
}: FooterExtendedNavListSectionProps): React.ReactElement => {
  const [primaryLinkOrHeading, ...secondaryLinks] = links
  const classes = classnames(
    'usa-footer__primary-content usa-footer__primary-content--collapsible',
    { hidden: !isOpen }
  )

  return (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/no-static-element-interactions
    <section className={classes} onClick={onToggle} onKeyPress={onToggle}>
      <h4 className="usa-footer__primary-link">{primaryLinkOrHeading}</h4>
      <NavList type="footerSecondary" items={secondaryLinks} />
    </section>
  )
}

export default FooterExtendedNavListSection
