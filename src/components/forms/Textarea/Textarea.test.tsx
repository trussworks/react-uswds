import React, { RefObject, useRef } from 'react'
import { render } from '@testing-library/react'

import { Textarea } from './Textarea'

describe('Textarea component', () => {
  it('renders without errors', () => {
    const { queryByTestId } = render(
      <Textarea id="input-type-text" name="input-type-text" />
    )
    expect(queryByTestId('textarea')).toBeInTheDocument()
  })

  describe('forwarding refs', () => {
    beforeEach(() => {
      vi.clearAllMocks()
    })

    it('appropriately renders a ref', () => {
      let ref
      const Parent = () => {
        ref = useRef(null)
        return (
          <Textarea id="input-type-text" name="input-type-text" ref={ref} />
        )
      }

      render(<Parent />)

      const parentRef = ref as unknown as RefObject<HTMLElement>

      expect(parentRef.current).toBeInTheDocument()
      expect(parentRef.current.tagName).toBe('TEXTAREA')
    })
  })
})
