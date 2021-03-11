/* 
Structure:
- IdentifierMasthead <Section>
- Agency identifier (class="usa-identifier__section usa-identifier__section--masthead”)
    - img - agency logo (possibly is a link)
    - agency descrip
    - identify domain
    - identity disclaimer (and link)
- IdentifierLinks  <Nav>
- Important links (class="usa-identifier__section usa-identifier__section--required-links”)
    - container
    - required links list
        - required links item(s)
- IdentifierGov  <Section>
- U.S gov’t info and services (class="usa-identifier__section usa-identifier__section--usagov”)
    - container
        - usagov description
        - visit usa.gov link
*/
import React from 'react'
import { IdentifierGov } from '../IdentifierGov/IdentifierGov'

export const Identifier = (): React.ReactElement => {
  return <div data-testid="identifier">Identifier component</div>
}

export default Identifier
