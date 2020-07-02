import React from 'react'
import classnames from 'classnames'

type StyledLinkProps = React.PropsWithChildren<{
  variant?: 'external' | 'unstyled'
}>

type LinkProps = StyledLinkProps & JSX.IntrinsicElements['a']

type AsCustomProps<T> = {
  asCustom: keyof JSX.IntrinsicElements | React.FunctionComponent<T>
} & React.PropsWithChildren<T>

type PossibleLinkProps<T> = LinkProps | AsCustomProps<T>

function isAsCustomProps<T>(
  props: PossibleLinkProps<T>
): props is AsCustomProps<T> {
  return (props as AsCustomProps<T>).asCustom !== undefined
}

export function Link<FCProps = LinkProps>(
  props: PossibleLinkProps<FCProps>
): React.ReactElement {
  // 2 ways to use this
  // 1. default element "a", styled using default LinkProps
  // 2. asCustom element or FunctionComponent, styled using custom
  //    FCProps.  The custom FCProps might have a `variant` that has a
  //    different meaning in the custom component, so we have to leave
  //    styling up to the custom component

  if (isAsCustomProps<FCProps>(props)) {
    const { asCustom, children, ...remainingProps } = props
    // 1. We know props is AsCustomProps<FCProps>
    // 2. We know AsCustomProps<FCProps> is
    //    FCProps & { children: ..., asCustom: ... }
    // 3. Therefore we know that removing those two props leaves us
    //    with FCProps
    //
    // Not sure why TypeScript can't figure that out
    const linkProps: FCProps = (remainingProps as unknown) as FCProps
    return React.createElement(asCustom, linkProps, children)
  } else {
    const { children, variant, className, ...linkProps } = props
    const unstyled = variant === 'unstyled'
    const isExternalLink = variant === 'external'

    const classes = unstyled
      ? className
      : classnames(
          'usa-link',
          {
            'usa-link--external': isExternalLink,
          },
          className
        )
    return (
      <a className={classes} {...linkProps}>
        {children}
      </a>
    )
  }
}
