import React from 'react'
import classnames from 'classnames'
import { HeadingLevel } from '../../../types/headingLevel'

export interface BaseProcessListHeadingProps {
  type: string
  className?: string
  children?: React.ReactNode
}

export interface HeadingProcessListHeadingProps
  extends BaseProcessListHeadingProps {
  type: HeadingLevel
}

export interface ParagraphProcessListHeadingProps
  extends BaseProcessListHeadingProps {
  type: 'p'
}

export type ProcessListHeadingProps = HeadingProcessListHeadingProps &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  >

export type ProcessListParagraphHeadingProps =
  ParagraphProcessListHeadingProps & JSX.IntrinsicElements['p']

const ProcessListHeading = ({
  type,
  className,
  children,
  ...headingProps
}:
  | ProcessListParagraphHeadingProps
  | ProcessListHeadingProps): React.ReactElement => {
  const classes = classnames('usa-process-list__heading', className)
  const Tag = type
  return (
    <Tag data-testid="processListHeading" className={classes} {...headingProps}>
      {children}
    </Tag>
  )
}

export default ProcessListHeading
