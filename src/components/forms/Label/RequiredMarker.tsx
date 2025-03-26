import React, { type JSX } from 'react'

export const RequiredMarker = (): JSX.Element => {
  return (
    <abbr title="required" className="usa-hint usa-hint--required">
      *
    </abbr>
  )
}
export default RequiredMarker
