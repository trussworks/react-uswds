import React from 'react'
import classnames from 'classnames'

type ProcessListHeadingProps<T> = {
  className?: string
  children?: React.ReactNode
} & T

interface WithCustomHeadingProps<T> {
  asCustom: React.FunctionComponent<T>
}

export type DefaultProcessListHeadingProps = ProcessListHeadingProps<
  JSX.IntrinsicElements['h4']
>

export type CustomHeadingProps<T> = ProcessListHeadingProps<T> &
  WithCustomHeadingProps<T>

export function isCustomProps<T>(
  props: DefaultProcessListHeadingProps | CustomHeadingProps<T>
): props is CustomHeadingProps<T> {
  return 'asCustom' in props
}

function headingClasses<T>(
  className: ProcessListHeadingProps<T>['className']
): string | undefined {
  return classnames('usa-process-list__heading', className)
}

export function ProcessListHeading(
  props: DefaultProcessListHeadingProps
): React.ReactElement
export function ProcessListHeading<T>(
  props: CustomHeadingProps<T>
): React.ReactElement
export function ProcessListHeading<FCProps = DefaultProcessListHeadingProps>(
  props: DefaultProcessListHeadingProps | CustomHeadingProps<FCProps>
): React.ReactElement {
  if (isCustomProps(props)) {
    const { className, asCustom, children, ...remainingProps } = props

    const headingProps: FCProps = (remainingProps as unknown) as FCProps
    const classes = headingClasses(className)
    return React.createElement(
      asCustom,
      {
        className: classes,
        ...headingProps,
      },
      children
    )
  } else {
    const { children, className, ...headingProps } = props

    const classes = headingClasses(className)
    return (
      <h4 className={classes} {...headingProps}>
        {children}
      </h4>
    )
  }
}
