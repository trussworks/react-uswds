import React, { act } from 'react'
import { hydrateRoot } from 'react-dom/client'
import { renderToString } from 'react-dom/server'

import { FooterExtendedNavList } from './FooterExtendedNavList'

const browserWindow = window
const restoreWindow = (): void => {
  Object.defineProperty(globalThis, 'window', {
    value: browserWindow,
    writable: true,
    configurable: true,
  })
}

describe('FooterExtendedNavList hydration', () => {
  afterEach(() => {
    vi.unstubAllGlobals()
    restoreWindow()
  })

  it('hydrates with the current window width', () => {
    const props = { nestedLinks: [[<>Section</>, <>Link</>]] }
    Reflect.deleteProperty(globalThis, 'window')
    const markup = renderToString(<FooterExtendedNavList {...props} />)
    restoreWindow()
    vi.stubGlobal('innerWidth', 479)

    document.body.innerHTML = `<div id="root">${markup}</div>`
    const container = document.getElementById('root') as HTMLElement
    const onRecoverableError = vi.fn()

    let root: ReturnType<typeof hydrateRoot>
    act(() => {
      root = hydrateRoot(container, <FooterExtendedNavList {...props} />, {
        onRecoverableError,
      })
    })

    expect(container.querySelectorAll('section.hidden')).toHaveLength(1)
    expect(onRecoverableError).not.toHaveBeenCalled()

    act(() => root.unmount())
  })
})
