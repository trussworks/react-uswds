/*  eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

type SocialLinksProps = {
  links: React.ReactNode[]
}

export const SocialLinks = (
  props: SocialLinksProps & React.HTMLAttributes<HTMLElement>
): React.ReactElement => {
  const { links } = props

  return (
    <div className="usa-footer__social-links grid-row grid-gap-1">
      {links.map((link, i) => (
        <div key={`socialLink${i}`} className="grid-col-auto">
          {link}
        </div>
      ))}
    </div>
  )
}
