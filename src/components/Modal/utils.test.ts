import { renderHook, act } from '@testing-library/react-hooks'

import { useModal } from './utils'

describe('the useModal hook', () => {
  it('isOpen defaults to false', () => {
    const { result } = renderHook(() => useModal())

    expect(result.current.isOpen).toEqual(false)
  })

  describe('toggleModal', () => {
    it('with no parameters sets isOpen to its opposite', () => {
      const { result } = renderHook(() => useModal())
      expect(result.current.isOpen).toEqual(false)
      act(() => {
        result.current.toggleModal()
      })
      expect(result.current.isOpen).toEqual(true)
      act(() => {
        result.current.toggleModal()
      })
      expect(result.current.isOpen).toEqual(false)
    })

    it('called with true sets isOpen to true', () => {
      const { result } = renderHook(() => useModal())

      expect(result.current.isOpen).toEqual(false)
      act(() => {
        result.current.toggleModal(undefined, true)
      })
      expect(result.current.isOpen).toEqual(true)
      act(() => {
        result.current.toggleModal(undefined, true)
      })
      expect(result.current.isOpen).toEqual(true)
    })

    it('called with false sets isOpen to false', () => {
      const { result } = renderHook(() => useModal())

      expect(result.current.isOpen).toEqual(false)
      act(() => {
        result.current.toggleModal(undefined, false)
      })
      expect(result.current.isOpen).toEqual(false)

      act(() => {
        result.current.toggleModal()
      })
      expect(result.current.isOpen).toEqual(true)
      act(() => {
        result.current.toggleModal(undefined, false)
      })
      expect(result.current.isOpen).toEqual(false)
    })
  })
})
