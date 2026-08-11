// @vitest-environment node

import React from 'react'
import { renderToString } from 'react-dom/server'

import { PrimaryNav } from './PrimaryNav'

it('renders an expanded mobile navigation on the server', () => {
  expect(() =>
    renderToString(
      <PrimaryNav
        mobileExpanded
        items={[
          <a href="#one" key="one">
            One
          </a>,
        ]}
        onToggleMobileNav={() => undefined}
      />
    )
  ).not.toThrow()
})
