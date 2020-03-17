import React from 'react'
import { render } from '@testing-library/react'
import { renderHook, act } from '@testing-library/react-hooks'
import '@testing-library/jest-dom/extend-expect'

import { Modal, connectModal, useModal } from './Modal'

describe('Modal component', () => {
  it('renders without errors', () => {
    const { queryByTestId } = render(<Modal>My Modal</Modal>)
    expect(queryByTestId('modal')).toBeInTheDocument()
  })
})

const TestModal = (): React.ReactElement => <div>My Modal</div>

describe('connectModal', () => {
  const mockClose = jest.fn()

  describe('if isOpen is false', () => {
    it('does not render its children', () => {
      const TestConnectedModal = connectModal(TestModal)
      const { queryByText } = render(
        <TestConnectedModal isOpen={false} onClose={mockClose} />
      )
      expect(queryByText('My Modal')).not.toBeInTheDocument()
    })
  })

  describe('if isOpen is true', () => {
    it('renders its children', () => {
      const TestConnectedModal = connectModal(TestModal)
      const { queryByText } = render(
        <TestConnectedModal isOpen={true} onClose={mockClose} />
      )
      expect(queryByText('My Modal')).toBeInTheDocument()
    })
  })
})

describe('useModal', () => {
  it('provides state and functions for opening/closing a modal', () => {
    const { result } = renderHook(() => useModal())
    expect(result.current.isOpen).toEqual(false)
    expect(typeof result.current.openModal).toBe('function')
    expect(typeof result.current.closeModal).toBe('function')

    act(() => {
      result.current.openModal()
    })

    expect(result.current.isOpen).toEqual(true)

    act(() => {
      result.current.closeModal()
    })

    expect(result.current.isOpen).toEqual(false)
  })
})
