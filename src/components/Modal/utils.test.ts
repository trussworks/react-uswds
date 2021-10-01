import { renderHook, act } from '@testing-library/react-hooks'

import { useModal } from './utils'

describe('the useModal hook', () => {
  it('isOpen defaults to false', () => {
    const { result } = renderHook(() => useModal())

    expect(result.current.isOpen).toEqual(false)
  })

  it('openModal sets isOpen to true', () => {
    const { result } = renderHook(() => useModal())

    act(() => {
      result.current.openModal()
    })
    expect(result.current.isOpen).toEqual(true)
  })

  it('closeModal sets isOpen to false', () => {
    const { result } = renderHook(() => useModal())

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
