import getter from '../../../../src/store/getters/application'

describe('applications', () => {
  let state

  beforeEach(() => {
    state = {
      apps: [
        {
          id: '470fedc5-489e-5acb-a200-c85adaa18356',
          name: 'Power Dialer',
          description: 'Auto dialer that will help increase your connect rates and talk time.',
          categories: ['Dialer'],
          subscriptions: [
            {
              name: 'Trial',
              price: 0
            },
            {
              name: 'Professional',
              price: 45
            },
            {
              name: 'Premium',
              price: 60
            }
          ]
        },
        {
          id: '9b565b11-7311-5b5e-a699-97873dffb361',
          name: 'Voice Report',
          description: 'Calls reporting and analytics of your calls.',
          categories: ['Voice Analytics', 'Reporting', 'Optimization'],
          subscriptions: [
            {
              name: 'Trial',
              price: 0
            },
            {
              name: 'Professional',
              price: 35
            }
          ]
        }
      ],
      category: null,
      error: null,
      loading: false,
      pageIndex: 0,
      pageSize: 6,
      term: null
    }
  })

  it('should list all results', () => {
    const result = getter(state)

    expect(result.list).toHaveLength(2)
    expect(result.total).toBe(2)
    expect(result.totalPages).toBe(1)
  })

  it('should return no result when empty', () => {
    state.apps = []

    const result = getter(state)

    expect(result.total).toBe(0)
    expect(result.totalPages).toBe(0)
  })

  it('should return no result when null', () => {
    state.apps = null

    const result = getter(state)

    expect(result.total).toBe(0)
    expect(result.totalPages).toBe(0)
  })

  it('should return filtered list', () => {
    state.term = 'oi'

    const result = getter(state)

    expect(result.list).toHaveLength(1)
    expect(result.total).toBe(1)
    expect(result.totalPages).toBe(1)
  })

  it('should fail filtering', () => {
    state.term = '!!!!!!!!!'

    const result = getter(state)

    expect(result.list).toHaveLength(0)
    expect(result.total).toBe(0)
    expect(result.totalPages).toBe(0)
  })

  it('should paginate the result', () => {
    state.pageSize = 1

    const result = getter(state)

    expect(result.list).toHaveLength(1)
    expect(result.total).toBe(2)
    expect(result.totalPages).toBe(2)
  })

  it('should sort as expected', () => {
    const result = getter(state)

    expect(result.list[0].name).toBe('Voice Report')
    expect(result.list[1].name).toBe('Power Dialer')
  })

  it('should filter by category', () => {
    state.category = 'Optimization'

    const result = getter(state)

    expect(result.list).toHaveLength(1)
    expect(result.total).toBe(1)
    expect(result.totalPages).toBe(1)
  })
})
