import React from 'react'
import classnames from 'classnames'

interface BaseProcessListHeadingProps {
  type: string
  className?: string
  children?: React.ReactNode
}

interface HeadingProcessListHeadingProps extends BaseProcessListHeadingProps {
  type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

interface ParagraphProcessListHeadingProps extends BaseProcessListHeadingProps {
  type: 'p'
}

type ProcessListHeadingProps = HeadingProcessListHeadingProps &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  >

type ProcessListParagraphHeadingProps = ParagraphProcessListHeadingProps &
  JSX.IntrinsicElements['p']

export const ProcessListHeading = ({
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
