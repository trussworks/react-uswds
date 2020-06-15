import { initialState, rootReducer } from './reducers'
import { OpenModalAction, CloseModalAction, AppState } from './types'

describe('rootReducer', () => {
  it('should set the openModalKey state', () => {
    const openModalAction: OpenModalAction = {
      type: 'OPEN_MODAL',
      payload: 'testModal',
    }

    const expectedState : AppState = {
      modalState : {
        openModalKey: 'testModal'
      }
    }

    expect(rootReducer(initialState, openModalAction)).toEqual(expectedState)
  })

  it('should set the openModalKey state', () => {
    const closeModalAction: CloseModalAction = {
      type: 'CLOSE_MODAL',
      payload: 'testModal',
    }

    const expectedState : AppState = {
      modalState : {
        openModalKey: ''
      }
    }

    expect(rootReducer(initialState, closeModalAction)).toEqual(expectedState)
  })
})
