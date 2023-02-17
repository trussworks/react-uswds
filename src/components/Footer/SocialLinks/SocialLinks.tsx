/*  eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import classnames from 'classnames'

import iconFacebook from '@uswds/uswds/src/img/usa-icons/facebook.svg'
import iconTwitter from '@uswds/uswds/src/img/usa-icons/twitter.svg'
import iconYouTube from '@uswds/uswds/src/img/usa-icons/youtube.svg'
import iconInstagram from '@uswds/uswds/src/img/usa-icons/instagram.svg'
import iconRSS from '@uswds/uswds/src/img/usa-icons/rss_feed.svg'

type SocialLinksProps = {
  links: React.ReactNode[]
}

type SocialLinkProps = {
  name: 'Facebook' | 'Twitter' | 'YouTube' | 'Instagram' | 'RSS'
}

export const SocialLinks = ({
  className,
  links,
}: SocialLinksProps & JSX.IntrinsicElements['div']): React.ReactElement => {
  const classes = classnames(
    'usa-footer__social-links grid-row grid-gap-1',
    className
  )
  return (
    <div className={classes}>
      {links.map((link, i) => (
        <div key={`socialLink${i}`} className="grid-col-auto">
          {link}
        </div>
      ))}
    </div>
  )
}

export const SocialLink = ({
  name,
  ...props
}: SocialLinkProps & JSX.IntrinsicElements['a']): React.ReactElement => {
  let iconSrc = ''
  switch (name) {
    case 'Facebook':
      iconSrc = iconFacebook
      break
    case 'Twitter':
      iconSrc = iconTwitter
      break
    case 'YouTube':
      iconSrc = iconYouTube
      break
    case 'Instagram':
      iconSrc = iconInstagram
      break
    case 'RSS':
      iconSrc = iconRSS
      break
  }

  return (
    <a className="usa-social-link" {...props}>
      <img className="usa-social-link__icon" src={iconSrc} alt={name} />
    </a>
  )
}
