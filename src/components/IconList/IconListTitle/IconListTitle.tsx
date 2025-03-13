import React, { type JSX } from 'react'
import classnames from 'classnames'
import { HeadingLevel } from '../../../types/headingLevel'

interface BaseIconListTitleProps {
  type: string
  children: React.ReactNode
  className?: string
}

interface HeadingIconListTitleProps extends BaseIconListTitleProps {
  type: HeadingLevel
}

interface ParagraphIconListTitleProps extends BaseIconListTitleProps {
  type: 'p'
}

type IconListHeadingTitleProps = HeadingIconListTitleProps &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  >

type IconListParagraphTitleProps = ParagraphIconListTitleProps &
  JSX.IntrinsicElements['p']

export const IconListTitle = ({
  type,
  children,
  className,
}: IconListParagraphTitleProps | IconListHeadingTitleProps): JSX.Element => {
  const classes = classnames(className, 'usa-icon-list__title')
  const Tag = type
  return (
    <Tag className={classes} data-testid="iconListTitle">
      {children}
    </Tag>
  )
}

export default IconListTitle
