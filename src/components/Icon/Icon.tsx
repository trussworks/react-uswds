import React, { type JSX } from 'react'
import classnames from 'classnames'

interface USWDSIconProps {
  focusable?: boolean
  role?: string
  size?: 3 | 4 | 5 | 6 | 7 | 8 | 9
  className?: string
}

export type IconProps = USWDSIconProps & JSX.IntrinsicElements['svg']

export const makeUSWDSIcon = (
  Component: React.ComponentType<IconProps>
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

    if (
      'img' === role &&
      !iconProps['aria-hidden'] &&
      !iconProps['aria-label'] &&
      !iconProps['aria-labelledby']
    ) {
      console.warn(
        `Icon with img role is missing an accessible label. https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Img_role#associated_wai-aria_roles_states_and_properties`
      )
    }
    return <Component {...finalProps} />
  }
  IconFunctionalComponent.displayName = Component.displayName
  return IconFunctionalComponent
}
