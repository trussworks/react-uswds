import React from 'react'
import classnames from 'classnames'
import { HeadingLevel } from '../../../types/headingLevel.js'

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

export type ProcessListHeadingAsHeadingProps = HeadingProcessListHeadingProps &
  JSX.IntrinsicElements['h1']

export type ProcessListHeadingAsParagraphProps =
  ParagraphProcessListHeadingProps & JSX.IntrinsicElements['p']

export type ProcessListHeadingProps =
  | ProcessListHeadingAsHeadingProps
  | ProcessListHeadingAsParagraphProps

const ProcessListHeading = ({
  type,
  className,
  children,
  ...headingProps
}: ProcessListHeadingProps): React.ReactElement => {
  const classes = classnames('usa-process-list__heading', className)
  const Tag = type
  return (
    <Tag data-testid="processListHeading" className={classes} {...headingProps}>
      {children}
    </Tag>
  )
}

export default ProcessListHeading
