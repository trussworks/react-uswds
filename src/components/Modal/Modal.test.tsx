import React from 'react'
import { render } from '@testing-library/react'
import { renderHook, act } from '@testing-library/react-hooks'

jest.mock('../../deprecation')
import { deprecationWarning } from '../../deprecation'
import { Modal, connectModal, useModal } from './Modal'

describe('Modal component', () => {
  it('renders without errors', () => {
    const { queryByTestId } = render(<Modal>My Modal</Modal>)
    expect(queryByTestId('modal')).toBeInTheDocument()
    expect(deprecationWarning).toHaveBeenCalledTimes(1)
  })
})

const TestModal = (): React.ReactElement => <div>My Modal</div>

describe('connectModal', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })
  const mockClose = jest.fn()

  describe('if isOpen is false', () => {
    it('does not render its children', () => {
      const TestConnectedModal = connectModal(TestModal)
      const { queryByText } = render(
        <TestConnectedModal isOpen={false} onClose={mockClose} />
      )
      expect(queryByText('My Modal')).not.toBeInTheDocument()
      expect(deprecationWarning).toHaveBeenCalledTimes(1)
    })
  })

  describe('if isOpen is true', () => {
    it('renders its children', () => {
      const TestConnectedModal = connectModal(TestModal)
      const { queryByText } = render(
        <TestConnectedModal isOpen={true} onClose={mockClose} />
      )
      expect(queryByText('My Modal')).toBeInTheDocument()
      expect(deprecationWarning).toHaveBeenCalledTimes(2)
    })
  })
})

describe('useModal', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('provides state and functions for opening/closing a modal', () => {
    const { result } = renderHook(() => useModal())
    expect(deprecationWarning).toHaveBeenCalledTimes(1)
    expect(result.current.isOpen).toEqual(false)
    expect(typeof result.current.openModal).toBe('function')
    expect(typeof result.current.closeModal).toBe('function')

    act(() => {
      result.current.openModal()
    })

    expect(result.current.isOpen).toEqual(true)
    expect(deprecationWarning).toHaveBeenCalledTimes(2)

    act(() => {
      result.current.closeModal()
    })

    expect(result.current.isOpen).toEqual(false)
    expect(deprecationWarning).toHaveBeenCalledTimes(3)
  })
})
