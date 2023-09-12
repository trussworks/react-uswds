import React, { ComponentType, PropsWithChildren, useEffect } from 'react'

import { deprecationWarning } from '../../deprecation'

export function withDeprecationWarning<P>(
  Component: ComponentType<P>,
  warning: string
) {
  // eslint-disable-next-line react/display-name
  return (props: PropsWithChildren<P>): JSX.Element => {
    useEffect(() => {
      deprecationWarning(warning)
    }, [])

    return <Component {...props} />
  }
}
