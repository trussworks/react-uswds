import React, { type JSX } from 'react'
import classnames from 'classnames'
import { Icon } from '../../Icon/Icons'
import { IconProps } from '../../Icon/Icon'

export type SocialLinksProps = {
  links: React.ReactNode[]
} & JSX.IntrinsicElements['div']

export type SocialLinkProps = {
  name: 'Facebook' | 'Twitter' | 'YouTube' | 'Instagram' | 'RSS'
} & JSX.IntrinsicElements['a']

export const SocialLinks = ({
  className,
  links,
}: SocialLinksProps): JSX.Element => {
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
}: SocialLinkProps): JSX.Element => {
  let IconComponent: React.ComponentType<IconProps>
  switch (name) {
    case 'Facebook':
      IconComponent = Icon.Facebook
      break
    case 'Twitter':
      IconComponent = Icon.Twitter
      break
    case 'YouTube':
      IconComponent = Icon.Youtube
      break
    case 'Instagram':
      IconComponent = Icon.Instagram
      break
    case 'RSS':
      IconComponent = Icon.RssFeed
      break
  }

  return (
    <a className="usa-social-link" {...props} title={name}>
      {IconComponent && (
        <IconComponent
          className="usa-social-link__icon"
          name={name}
          aria-hidden="true"
        />
      )}
    </a>
  )
}
