import React from 'react'
import classnames from 'classnames'

// Import individual SVGs
import AccessibilityNewSvg from 'uswds/dist/img/usa-icons/accessibility_new.svg'

interface USWDSIconProps {
  focusable?: boolean
  role?: string
  size?: 3 | 4 | 5 | 6 | 7 | 8 | 9
  className?: string
}

type IconProps = USWDSIconProps & JSX.IntrinsicElements['svg']

function makeUSWDSIcon(Component: React.ComponentType<IconProps>) {
  return (props: IconProps) => {
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

    return <Component {...finalProps} />
  }
}

export const AccessibilityNew: React.ComponentType<IconProps> =
  makeUSWDSIcon(AccessibilityNewSvg)
