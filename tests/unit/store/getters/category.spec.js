import getter from '../../../../src/store/getters/category'

describe('categories', () => {
  let state

  beforeEach(() => {
    state = {
      apps: [
        {
          categories: ['Dialer']
        },
        {
          categories: ['Voice Analytics', 'Reporting', 'Optimization']
        }
      ]
    }
  })

  it('should return all categories', () => {
    const result = getter(state)

    expect(result).toHaveLength(4)
  })

  it('should return no result when empty', () => {
    state.apps = []

    const result = getter(state)

    expect(result).toHaveLength(0)
  })

  it('should return no result when null', () => {
    state.apps = null

    const result = getter(state)

    expect(result).toHaveLength(0)
  })

  it('should sort as expected', () => {
    const result = getter(state)

    expect(result[0]).toEqual('Dialer')
  })
})
