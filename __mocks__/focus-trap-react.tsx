import React from "react";
import { vi } from "vitest";
import type * as FocusTrapType from "focus-trap-react"

const FocusTrap = (await vi.importActual("focus-trap-react")).default as React.ComponentType<FocusTrapType.Props>;

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
export default FixedComponent;