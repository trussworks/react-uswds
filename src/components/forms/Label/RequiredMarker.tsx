import React from 'react'
export const RequiredMarker = (): React.ReactElement => {
  return (
    <abbr title="required" className="usa-hint usa-hint--required">
      *
    </abbr>
  )
}
export default RequiredMarker
