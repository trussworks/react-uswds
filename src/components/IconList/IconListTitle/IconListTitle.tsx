import React, { ReactElement } from 'react'
import classnames from 'classnames'

interface BaseIconListTitleProps {
  type: string
  children: React.ReactNode
  className?: string
}

interface HeadingIconListTitleProps extends BaseIconListTitleProps {
  type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
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
}: IconListParagraphTitleProps | IconListHeadingTitleProps): ReactElement => {
  const classes = classnames(className, 'usa-icon-list__title')
  const Tag = type
  return (
    <Tag className={classes} data-testid="iconListTitle">
      {children}
    </Tag>
  )
}

export default IconListTitle
