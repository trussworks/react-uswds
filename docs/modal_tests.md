# Modal Tests

If in your project you are testing components that render the `Modal` component in `jsdom`, you will need to make accomodations in order for these tests to not fail due to an error.
Either through a mock file or a custom import function for the library `focus-trap-react`, you will need to ensure that the `options.tabbableOptions.displayCheck` option is set to false when the `FocusTrap` component is rendered. Either per test file or in your test setup file, call your unit testing library's mock function for `focus-trap-react`. A typescript jest mock file example is provided below (for an example of how we do this for vitest see [here](../__mocks__/focus-trap-react.tsx)). For more information see [here](https://github.com/focus-trap/tabbable#testing-in-jsdom).

# Example jest typescript mock file

```typescript
import type * as FocusTrapType from "focus-trap-react"
import { ComponentType } from "react";

const FocusTrap = jest.requireActual<ComponentType<FocusTrapType.Props>>("focus-trap-react");

/**
 * Override displayCheck for testing. See: https://github.com/focus-trap/tabbable#testing-in-jsdom
 */
const FixedComponent = ({focusTrapOptions, ...props}: FocusTrapType.Props) => {
    const fixedOptions = {...focusTrapOptions};
    fixedOptions.tabbableOptions = {
        ...fixedOptions.tabbableOptions,
        displayCheck: "none"
    }
    return <FocusTrap {...props} focusTrapOptions={fixedOptions} />
}

module.exports = FixedComponent
```
