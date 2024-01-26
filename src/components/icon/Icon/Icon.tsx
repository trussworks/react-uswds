import React, { forwardRef } from 'react'
import classnames from 'classnames'

export interface BaseIconProps {
  focusable?: boolean
  role?: string
  size?: 3 | 4 | 5 | 6 | 7 | 8 | 9
  className?: string
}

export type IconProps = React.ComponentPropsWithRef<IconComponent>

export type IconRef = React.ComponentRef<IconComponent>

export type IconForwardRef = React.ForwardRefRenderFunction<
  SVGSVGElement,
  BaseIconProps & React.ComponentPropsWithoutRef<'svg'>
>

export type IconComponent = ReturnType<
  typeof forwardRef<
    SVGSVGElement,
    BaseIconProps & React.ComponentPropsWithoutRef<'svg'>
  >
>

export const makeUSWDSIcon = (Component: IconComponent): IconComponent => {
  const IconFunctionalComponentForwardRef: IconForwardRef = (
    props,
    ref
  ): React.ReactElement => {
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
