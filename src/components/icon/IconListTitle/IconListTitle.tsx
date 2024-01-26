import React, { forwardRef } from 'react'
import classnames from 'classnames'
import { HeadingLevel } from '../../../types/headingLevel'
import { TagProps } from '../../Tag/Tag'

export interface BaseIconListTitleProps {
  type: string
  children: React.ReactNode
  className?: string
}

export interface HeadingIconListTitleProps extends BaseIconListTitleProps {
  type: HeadingLevel
}

export interface ParagraphIconListTitleProps extends BaseIconListTitleProps {
  type: 'p'
}

export type IconListHeadingTitleProps = HeadingIconListTitleProps &
  React.ComponentPropsWithoutRef<'h1'>

export type IconListParagraphTitleProps = ParagraphIconListTitleProps &
  React.ComponentPropsWithoutRef<'p'>

export type IconListTitleProps = React.ComponentPropsWithRef<
  typeof IconListTitle
>

export type ButtonGroupItemRef = React.ComponentRef<typeof IconListTitle>

export const IconListTitleForwardRef: React.ForwardRefRenderFunction<
  HTMLParagraphElement | HTMLHeadingElement,
  (IconListParagraphTitleProps | IconListHeadingTitleProps) &
    React.PropsWithoutRef<TagProps>
> = ({ type, children, className, ...props }, ref): React.ReactElement => {
  const classes = classnames(className, 'usa-icon-list__title')
  const Tag = type
  return (
    <Tag ref={ref} className={classes} data-testid="iconListTitle" {...props}>
      {children}
    </Tag>
  )
}

const IconListTitle = forwardRef(IconListTitleForwardRef)

export default IconListTitle
