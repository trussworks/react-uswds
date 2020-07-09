import React from 'react'
import classnames from 'classnames'

type StyledLinkProps = {
  variant?: 'external' | 'unstyled'
  className?: string
}

type LinkProps = {
  href: string
  children: React.ReactNode
} & React.PropsWithChildren<StyledLinkProps> &
  JSX.IntrinsicElements['a']

type AsCustomProps<T> = {
  asCustom: keyof JSX.IntrinsicElements | React.FunctionComponent<T>
} & StyledLinkProps &
  React.PropsWithChildren<T>

type PossibleLinkProps<T> = LinkProps | AsCustomProps<T>

function isAsCustomProps<T>(
  props: PossibleLinkProps<T>
): props is AsCustomProps<T> {
  return (props as AsCustomProps<T>).asCustom !== undefined
}

function linkClasses(
  variant: StyledLinkProps['variant'],
  className: StyledLinkProps['className']
): string | undefined {
  const unstyled = variant === 'unstyled'
  const isExternalLink = variant === 'external'

  return unstyled
    ? className
    : classnames(
        'usa-link',
        {
          'usa-link--external': isExternalLink,
        },
        className
      )
}

export function Link<FCProps = LinkProps>(
  props: PossibleLinkProps<FCProps>
): React.ReactElement {
  if (isAsCustomProps<FCProps>(props)) {
    const { variant, className, asCustom, children, ...remainingProps } = props
    // 1. We know props is AsCustomProps<FCProps>
    // 2. We know AsCustomProps<FCProps> is
    //    FCProps & { variant: ..., className: ..., children: ..., asCustom: ... }
    // 3. Therefore we know that removing those props leaves us
    //    with FCProps
    //
    const linkProps: FCProps = (remainingProps as unknown) as FCProps
    const classes = linkClasses(variant, className)
    return React.createElement(
      asCustom,
      {
        className: classes,
        ...linkProps,
      },
      children
    )
  } else {
    const { children, className, variant, ...linkProps } = props

    const classes = linkClasses(variant, className)
    return (
      <a className={classes} {...linkProps}>
        {children}
      </a>
    )
  }
}
