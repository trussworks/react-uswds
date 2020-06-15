import {
  CLOSE_MODAL,
  OPEN_MODAL,
} from './types'
import {
  closeModalAction,
  openModalAction,
} from './actions'

describe('Modal actions', () => {
  describe('closeModal Action', () => {
    it('returns the CLOSE_MODAL action type', () => {
      const expectedAction = {
        type: CLOSE_MODAL,
        payload: 'testkey'
      }
      expect(closeModalAction('testkey')).toEqual(expectedAction)
    })
  })

  describe('openModal Action', () => {
    it('returns the OPEN_MODAL action type', () => {
      const expectedAction = {
        type: OPEN_MODAL,
        payload: 'testkey'
      }
      expect(openModalAction('testkey')).toEqual(expectedAction)
    })
  })
})
