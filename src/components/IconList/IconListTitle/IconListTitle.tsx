import React, { ReactElement } from 'react'
import classnames from 'classnames'
import { HeadingLevel } from '../../../types/headingLevel'

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
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  >

export type IconListParagraphTitleProps = ParagraphIconListTitleProps &
  JSX.IntrinsicElements['p']

export type IconListTitleProps =
  | IconListParagraphTitleProps
  | IconListHeadingTitleProps

export const IconListTitleForwardRef: React.ForwardRefRenderFunction<HTMLElement, IconListTitleProps> = ({
  type,
  children,
  className,
  ...props
}, ref): ReactElement => {
  const classes = classnames(className, 'usa-icon-list__title')
  const Tag = type
  return (
    <Tag ref={ref} className={classes} data-testid="iconListTitle" {...props}>
      {children}
    </Tag>
  )
}

export default IconListTitle
