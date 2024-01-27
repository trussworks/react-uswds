import { renderHook } from '@testing-library/react-hooks'

import useTooltip from './useTooltip'
import { isElementInViewport, calculateMarginOffset } from './utils'

jest.mock('./utils')

const mockedIsElementInViewport = isElementInViewport as jest.MockedFunction<
  typeof isElementInViewport
>
mockedIsElementInViewport.mockReturnValue(true)

const mockedCalculateMarginOffset =
  calculateMarginOffset as jest.MockedFunction<typeof calculateMarginOffset>
mockedCalculateMarginOffset.mockReturnValue(100)

function setup(
  position?: 'top' | 'bottom' | 'left' | 'right',
  isMockOffsets = false
) {
  const render = renderHook(() => useTooltip(position))
  const triggerEl = document.createElement('div')
  const bodyEl = document.createElement('div')

  if (isMockOffsets) {
    jest.spyOn(triggerEl, 'offsetHeight', 'get').mockReturnValue(250)
    jest.spyOn(triggerEl, 'offsetWidth', 'get').mockReturnValue(350)
    jest.spyOn(triggerEl, 'offsetLeft', 'get').mockReturnValue(100)

    jest.spyOn(bodyEl, 'offsetHeight', 'get').mockReturnValue(225)
    jest.spyOn(bodyEl, 'offsetWidth', 'get').mockReturnValue(300)
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ;(render.result.current.triggerElementRef as any).current = triggerEl
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ;(render.result.current.tooltipBodyRef as any).current = bodyEl

  return render
}

describe('Tooltip component', () => {
  beforeEach(jest.clearAllMocks)

  it('defaults the position to top if no position prop is given', async () => {
    const { result, waitForNextUpdate } = setup()

    result.current.setVisible(true)
    await waitForNextUpdate()

    expect(result.current.effectivePosition).toBe('top')
  })

  it('hides by default', () => {
    const { result } = setup()

    expect(result.current.isVisible).toBe(false)
    expect(result.current.isShown).toBe(false)
    expect(result.current.wrapTooltip).toBe(false)
  })

  it('visibility properties update after setVisible', async () => {
    const { result, waitForNextUpdate } = setup()

    result.current.setVisible(true)
    await waitForNextUpdate()

    expect(result.current.isVisible).toBe(true)
    expect(result.current.isShown).toBe(true)
    expect(result.current.wrapTooltip).toBe(false)
  })

  describe('positioning the tooltip', () => {
    describe('when position is top', () => {
      beforeEach(() => {
        jest.clearAllMocks()
      })

      it('positions on the top', async () => {
        const { result, waitForNextUpdate } = setup('top', true)

        result.current.setVisible(true)
        await waitForNextUpdate()

        expect(result.current.effectivePosition).toBe('top')
        expect(result.current.positionStyles).toEqual({
          left: '50%',
          top: '-5px',
          margin: '-100px 0 0 -50px',
        })
      })
    })

    describe('when position is bottom', () => {
      beforeEach(() => {
        jest.clearAllMocks()
      })

      it('positions on the bottom', async () => {
        const { result, waitForNextUpdate } = setup('bottom', true)

        result.current.setVisible(true)
        await waitForNextUpdate()

        expect(result.current.effectivePosition).toBe('bottom')
        expect(result.current.positionStyles).toEqual({
          left: '50%',
          margin: '5px 0 0 -50px',
        })
      })
    })

    describe('when position is right', () => {
      beforeEach(() => {
        jest.clearAllMocks()
      })

      it('positions on the right', async () => {
        const { result, waitForNextUpdate } = setup('right', true)

        result.current.setVisible(true)
        await waitForNextUpdate()

        expect(result.current.effectivePosition).toBe('right')
        expect(result.current.positionStyles).toEqual({
          top: '50%',
          left: '455px',
          margin: '-50px 0 0 0',
        })
      })
    })

    describe('when position is left', () => {
      beforeEach(() => {
        jest.clearAllMocks()
      })

      it('positions on the left', async () => {
        const { result, waitForNextUpdate } = setup('left', true)

        result.current.setVisible(true)
        await waitForNextUpdate()

        expect(result.current.effectivePosition).toBe('left')
        expect(result.current.positionStyles).toEqual({
          top: '50%',
          left: '-5px',
          margin: '-50px 0 0 -100px',
        })
      })
    })
  })

  describe('finding the best position', () => {
    beforeEach(() => {
      jest.clearAllMocks()
    })

    it('tries to position to the top first', async () => {
      const { result, waitForNextUpdate } = setup('left', true)

      mockedIsElementInViewport.mockReturnValueOnce(false) // Intended position

      result.current.setVisible(true)
      await waitForNextUpdate()

      expect(result.current.effectivePosition).toBe('top')
      expect(result.current.positionStyles).toEqual({
        left: '50%',
        top: '-5px',
        margin: '-100px 0 0 -50px',
      })
    })

    it('tries to position to the bottom second', async () => {
      const { result, waitForNextUpdate } = setup('left', true)

      mockedIsElementInViewport.mockReturnValueOnce(false) // Intended position
      mockedIsElementInViewport.mockReturnValueOnce(false) // Tried top

      result.current.setVisible(true)
      await waitForNextUpdate()

      expect(result.current.effectivePosition).toBe('bottom')
      expect(result.current.positionStyles).toEqual({
        left: '50%',
        margin: '5px 0 0 -50px',
      })
    })

    it('tries to position to the right third', async () => {
      const { result, waitForNextUpdate } = setup('left', true)

      mockedIsElementInViewport.mockReturnValueOnce(false) // Intended position
      mockedIsElementInViewport.mockReturnValueOnce(false) // Tried top
      mockedIsElementInViewport.mockReturnValueOnce(false) // Tried bottom

      result.current.setVisible(true)
      await waitForNextUpdate()

      expect(result.current.effectivePosition).toBe('right')
      expect(result.current.positionStyles).toEqual({
        top: '50%',
        left: '455px',
        margin: '-50px 0 0 0',
      })
    })

    it('tries to position to the left fourth', async () => {
      const { result, waitForNextUpdate } = setup('left', true)

      mockedIsElementInViewport.mockReturnValueOnce(false) // Intended position
      mockedIsElementInViewport.mockReturnValueOnce(false) // Tried top
      mockedIsElementInViewport.mockReturnValueOnce(false) // Tried bottom
      mockedIsElementInViewport.mockReturnValueOnce(false) // Tried right

      result.current.setVisible(true)
      await waitForNextUpdate()

      expect(result.current.effectivePosition).toBe('left')
      expect(result.current.positionStyles).toEqual({
        top: '50%',
        left: '-5px',
        margin: '-50px 0 0 -100px',
      })
    })

    it('adds the wrap class if none of the positions worked', async () => {
      const { result, waitForNextUpdate } = setup('left', true)

      mockedIsElementInViewport.mockReturnValueOnce(false) // Intended position
      mockedIsElementInViewport.mockReturnValueOnce(false) // Tried top
      mockedIsElementInViewport.mockReturnValueOnce(false) // Tried bottom
      mockedIsElementInViewport.mockReturnValueOnce(false) // Tried right
      mockedIsElementInViewport.mockReturnValueOnce(false) // Tried left
      mockedIsElementInViewport.mockReturnValueOnce(false) // Tried intended again

      result.current.setVisible(true)
      await waitForNextUpdate()

      expect(result.current.effectivePosition).toBe('top')
      expect(result.current.wrapTooltip).toBe(true)
      expect(result.current.positionStyles).toEqual({
        left: '50%',
        top: '-5px',
        margin: '-100px 0 0 -50px',
      })
    })
  })
})
