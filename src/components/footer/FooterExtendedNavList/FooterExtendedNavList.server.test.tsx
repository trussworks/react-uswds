// @vitest-environment node

import React from 'react'
import { renderToString } from 'react-dom/server'

import { FooterExtendedNavList } from './FooterExtendedNavList'

describe('FooterExtendedNavList server rendering', () => {
  it('does not access the window while rendering', () => {
    expect(() =>
      renderToString(
        <FooterExtendedNavList nestedLinks={[[<>Section</>, <>Link</>]]} />
      )
    ).not.toThrow()
  })
})
