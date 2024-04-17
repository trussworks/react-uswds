import React from 'react'
import classnames from 'classnames'

interface USWDSIconProps {
  focusable?: boolean
  role?: string
  size?: 3 | 4 | 5 | 6 | 7 | 8 | 9
  className?: string
}

export type IconProps = USWDSIconProps & JSX.IntrinsicElements['svg']

export const makeUSWDSIcon = (
  name: string,
  displayName: string,
  spriteUrl: string
): React.FunctionComponent => {
  const IconFunctionalComponent = (props: IconProps): JSX.Element => {
    const {
      size,
      className,
      focusable = false,
      role = 'img',
      ...iconProps
    } = props

    const classes = classnames(
      'usa-icon',
      {
        [`usa-icon--size-${size}`]: size !== undefined,
      },
      className
    )

    const finalProps = {
      className: classes,
      focusable,
      role,
      ...iconProps,
    }

    return (
      <svg {...finalProps}>
        <title>{displayName}</title>
        <use href={`${spriteUrl}#${name}`} />
      </svg>
    )
  }
  IconFunctionalComponent.displayName = displayName
  return IconFunctionalComponent
}
