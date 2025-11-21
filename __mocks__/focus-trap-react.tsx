import React from 'react'
import { vi } from 'vitest'
import { FocusTrapProps } from 'focus-trap-react'

const ActualFocusTrap = (await vi.importActual('focus-trap-react'))
  .default as React.ComponentType<FocusTrapProps>

/**
 * Override displayCheck for testing. See: https://github.com/focus-trap/tabbable#testing-in-jsdom
 */
export const FocusTrap = ({ focusTrapOptions, ...props }: FocusTrapProps) => {
  const fixedOptions = { ...focusTrapOptions }
  fixedOptions.tabbableOptions = {
    ...fixedOptions.tabbableOptions,
    displayCheck: 'none',
  }
  return <ActualFocusTrap {...props} focusTrapOptions={fixedOptions} />
}
