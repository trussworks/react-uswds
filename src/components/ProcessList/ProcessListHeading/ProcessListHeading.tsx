import React, { forwardRef } from 'react'
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

export type DetailedProcessListHeadingProps = HeadingProcessListHeadingProps &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  >

export type ProcessListParagraphHeadingProps =
  ParagraphProcessListHeadingProps & JSX.IntrinsicElements['p']

export type ProcessListHeadingProps =
  | DetailedProcessListHeadingProps
  | ProcessListParagraphHeadingProps

export const ProcessListHeadingForwardRef: React.ForwardRefRenderFunction<
  HTMLElement,
  ProcessListHeadingProps
> = (
  { type, className, children, ...headingProps },
  ref
): React.ReactElement => {
  const classes = classnames('usa-process-list__heading', className)
  const Tag = type
  return (
    <Tag
      ref={ref}
      data-testid="processListHeading"
      className={classes}
      {...headingProps}>
      {children}
    </Tag>
  )
}

export const ProcessListHeading = forwardRef(ProcessListHeadingForwardRef)

export default ProcessListHeading
