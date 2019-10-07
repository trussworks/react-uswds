import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'

import { GovBanner } from './GovBanner'

describe('GovBanner component', () => {
  let node: HTMLElement

  beforeEach(() => {
    node = document.createElement('div')
  })

  afterEach(() => {
    unmountComponentAtNode(node)
  })

  it('renders without errors', () => {
    render(<GovBanner />, node, () => {
      expect(node.innerHTML).toContain('usa-banner')
    })
  })
})
