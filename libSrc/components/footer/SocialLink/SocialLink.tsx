import React from 'react'
import type { IconProps } from '../../Icon/utils.js'
import Icon from '../../Icon/Icon.js'

export interface BaseSocialLinkProps {
  name: 'Facebook' | 'Twitter' | 'YouTube' | 'Instagram' | 'RSS'
}

export type SocialLinkProps = BaseSocialLinkProps & JSX.IntrinsicElements['a']

const SocialLink = ({
  name,
  ...props
}: SocialLinkProps): React.ReactElement => {
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
        <IconComponent className="usa-social-link__icon" name={name} />
      )}
    </a>
  )
}

export default SocialLink
