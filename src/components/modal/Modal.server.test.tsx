// @vitest-environment node

import React from 'react'
import { renderToString } from 'react-dom/server'

import { Modal } from './Modal'

describe('Modal server rendering', () => {
  it('does not access the document when rendering to a portal', () => {
    expect(() =>
      renderToString(
        <Modal
          id="test-modal"
          aria-labelledby="modal-heading"
          aria-describedby="modal-description">
          Test modal
        </Modal>
      )
    ).not.toThrow()
  })
})
