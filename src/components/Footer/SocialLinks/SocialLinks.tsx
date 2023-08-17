/*  eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import classnames from 'classnames'
import { Icon } from '../../Icon/Icons'

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
  let icon: React.ReactElement
  switch (name) {
    case 'Facebook':
      icon = <Icon.Facebook className="usa-social-link__icon" name={name} />
      break
    case 'Twitter':
      icon = <Icon.Twitter className="usa-social-link__icon" name={name} />
      break
    case 'YouTube':
      icon = <Icon.Youtube className="usa-social-link__icon" name={name} />
      break
    case 'Instagram':
      icon = <Icon.Instagram className="usa-social-link__icon" name={name} />
      break
    case 'RSS':
      icon = <Icon.RssFeed className="usa-social-link__icon" name={name} />
      break
  }

  return (
    <a className="usa-social-link" {...props} title={name}>
      {icon}
    </a>
  )
}
