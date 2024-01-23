/*  eslint-disable jsx-a11y/anchor-is-valid */
import React, { forwardRef } from 'react'
import classnames from 'classnames'
import { Icon } from '../../Icon/Icons'

export type BaseSocialLinksProps = {
  links: React.ReactNode[]
}

export type SocialLinksProps = BaseSocialLinksProps &
  JSX.IntrinsicElements['div']

export type BaseSocialLinkProps = {
  name: 'Facebook' | 'Twitter' | 'YouTube' | 'Instagram' | 'RSS'
}

export type SocialLinkProps = BaseSocialLinkProps & JSX.IntrinsicElements['a']

export const SocialLinksForwardRef: React.ForwardRefRenderFunction<
  HTMLDivElement,
  SocialLinksProps
> = ({ className, links, ...props }, ref): React.ReactElement => {
  const classes = classnames(
    'usa-footer__social-links grid-row grid-gap-1',
    className
  )
  return (
    <div ref={ref} className={classes} {...props}>
      {links.map((link, i) => (
        <div key={`socialLink${i}`} className="grid-col-auto">
          {link}
        </div>
      ))}
    </div>
  )
}

export const SocialLinks = forwardRef(SocialLinksForwardRef)

export const SocialLinkForwardRef: React.ForwardRefRenderFunction<
  HTMLAnchorElement,
  SocialLinkProps
> = ({ name, ...props }, ref): React.ReactElement => {
  let icon: Icon
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
    <a ref={ref} className="usa-social-link" {...props} title={name}>
      {icon}
    </a>
  )
}

export const SocialLink = forwardRef(SocialLinkForwardRef)

export default SocialLinks
