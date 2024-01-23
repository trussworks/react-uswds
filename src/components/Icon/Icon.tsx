import React, { forwardRef } from 'react'
import classnames from 'classnames'

export interface BaseIconProps {
  focusable?: boolean
  role?: string
  size?: 3 | 4 | 5 | 6 | 7 | 8 | 9
  className?: string
}

export type IconProps = BaseIconProps & JSX.IntrinsicElements['svg']

export const makeUSWDSIcon = (
  Component: React.ForwardRefRenderFunction<SVGSVGElement, IconProps>
): React.ForwardRefRenderFunction<SVGSVGElement, IconProps> => {
  const IconFunctionalComponentForwardRef: React.ForwardRefRenderFunction<
    SVGSVGElement,
    IconProps
  > = (props: IconProps, ref): JSX.Element => {
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

    return <Component ref={ref} {...finalProps} />
  }
  const IconFunctionalComponent = forwardRef(IconFunctionalComponentForwardRef)
  IconFunctionalComponent.displayName = Component.displayName
  return IconFunctionalComponent
}
