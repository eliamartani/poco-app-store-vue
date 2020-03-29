import axios from 'axios'
import { actions } from '../../../src/store'

jest.mock('axios')

describe('actions', () => {
  let commit
  let mockApi

  beforeEach(() => {
    commit = jest.fn()

    mockApi = [
      {
        name: 'Video Contacts'
      },
      {
        name: 'Agent Monitor'
      }
    ]
  })

  it('should fetch initial data', async () => {
    axios.get = () => {
      return new Promise(resolve => {
        resolve({
          data: mockApi
        })
      })
    }

    await actions.fetchInitialData({ commit })

    expect(commit).toHaveBeenCalledWith('setApps', mockApi)
    expect(commit).toHaveBeenCalledWith('setLoading', false)
    expect(commit).toHaveBeenCalledWith('setLoading', true)
  })

  it('should commit error', async () => {
    const error = new Error('Connection issue')

    axios.get = () => {
      throw error
    }

    await actions.fetchInitialData({ commit })

    expect(commit).toHaveBeenCalledWith('setError', error)
    expect(commit).toHaveBeenCalledWith('setLoading', false)
    expect(commit).toHaveBeenCalledWith('setLoading', true)
  })

  it('should update category', () => {
    const category = 'Dialer'

    actions.setCategory({ commit }, category)

    expect(commit).toHaveBeenCalledWith('setCategory', category)
    expect(commit).toHaveBeenCalledWith('setPageIndex', 0)
  })
})
