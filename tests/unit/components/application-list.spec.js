import Vuex from 'vuex'
import { createLocalVue, shallowMount } from '@vue/test-utils'
import applicationList from '../../../src/components/application-list'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('application-list.vue', () => {
  let mocks
  let actions
  let getters
  let store
  let wrapper

  beforeEach(() => {
    mocks = {
      $t: () => {}
    }

    actions = {
      setTerm: jest.fn()
    }

    getters = {
      applications: () => ({
        list: [
          {
            name: 'Screen Share'
          },
          {
            name: 'Video Contacts'
          }
        ],
        total: 2,
        totalPages: 1
      }),
      error: () => null,
      pageIndex: () => 0,
      pageSize: () => 3
    }

    store = new Vuex.Store({
      actions,
      getters
    })

    wrapper = shallowMount(applicationList, {
      mocks,
      store,
      localVue
    })
  })

  it('should mount component without error', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('should trigger when input changes', () => {
    wrapper.vm.searchInput = 'change'

    wrapper.vm.$nextTick(() => {
      expect(actions.setTerm).toHaveBeenCalled()
    })
  })
})
