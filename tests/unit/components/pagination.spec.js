import Vuex from 'vuex'
import { createLocalVue, shallowMount } from '@vue/test-utils'
import pagination from '../../../src/components/pagination'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('pagination.vue', () => {
  let store

  beforeEach(() => {
    store = new Vuex.Store({
      actions: {
        setPageIndex: jest.fn()
      },
      getters: {
        pageIndex: () => 3
      }
    })
  })

  it('should mount component without error', () => {
    const wrapper = shallowMount(pagination, {
      propsData: {
        pagingSize: 1
      },
      store,
      localVue
    })

    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
