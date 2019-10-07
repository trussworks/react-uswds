import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'

import { Alert } from './Alert'

describe('Alert component', () => {
  let node: HTMLElement

  beforeEach(() => {
    node = document.createElement('div')
  })

  afterEach(() => {
    unmountComponentAtNode(node)
  })

  it('renders without errors', () => {
    render(<Alert />, node, () => {
      expect(node.innerHTML).toContain('usa-alert__body')
    })
  })
})
