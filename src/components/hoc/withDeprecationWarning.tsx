import React, { ComponentType, useEffect, type JSX } from 'react'

import { deprecationWarning } from '../../deprecation'

export function withDeprecationWarning<P extends JSX.IntrinsicAttributes>(
  Component: ComponentType<P>,
  warning: string
) {
  // eslint-disable-next-line react/display-name
  return (props: P): JSX.Element => {
    useEffect(() => {
      deprecationWarning(warning)
    }, [])

    return <Component {...props} />
  }
}
