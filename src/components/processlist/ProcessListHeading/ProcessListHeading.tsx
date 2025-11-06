import React, { type JSX } from 'react'
import classnames from 'classnames'
import { HeadingLevel } from '../../../types/headingLevel'

interface BaseProcessListHeadingProps {
  type: string
  className?: string
  children?: React.ReactNode
}

interface HeadingProcessListHeadingProps extends BaseProcessListHeadingProps {
  type: HeadingLevel
}

interface ParagraphProcessListHeadingProps extends BaseProcessListHeadingProps {
  type: 'p'
}

export type ProcessListHeadingProps = HeadingProcessListHeadingProps &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  >

export type ProcessListParagraphHeadingProps =
  ParagraphProcessListHeadingProps & JSX.IntrinsicElements['p']

export const ProcessListHeading = ({
  type,
  className,
  children,
  ...headingProps
}: ProcessListParagraphHeadingProps | ProcessListHeadingProps): JSX.Element => {
  const classes = classnames('usa-process-list__heading', className)
  const Tag = type
  return (
    <Tag data-testid="processListHeading" className={classes} {...headingProps}>
      {children}
    </Tag>
  )
}
