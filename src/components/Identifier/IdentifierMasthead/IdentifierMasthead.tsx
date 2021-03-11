import React from 'react'

export const IdentifierMasthead = (): React.ReactElement => {
  return (
    <section>
      <div data-testid="identifierMasthead">identifier masthead</div>
    </section>
  )
}

export default IdentifierMasthead

/*
- IdentifierMasthead <Section>
- Agency identifier (class="usa-identifier__section usa-identifier__section--masthead”)
    - img - agency logo (possibly is a link)
    - agency descrip
    - identify domain
    - identity disclaimer (and link)
*/
