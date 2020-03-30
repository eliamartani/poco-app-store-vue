import Vuex from 'vuex'
import { createLocalVue, shallowMount } from '@vue/test-utils'
import pagination from '../../../src/components/pagination'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('pagination.vue', () => {
  let actions
  let getters
  let store

  beforeEach(() => {
    actions = {
      setPageIndex: jest.fn()
    }

    getters = {
      pageIndex: () => 0
    }

    store = new Vuex.Store({
      actions,
      getters
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

    const listItems = wrapper.findAll('li')

    expect(listItems).toHaveLength(5)

    expect(wrapper.vm.pageIndex).toBe(0)
  })

  it('should trigger action call', () => {
    const wrapper = shallowMount(pagination, {
      propsData: {
        pagingSize: 2
      },
      store,
      localVue
    })
    const listItems = wrapper.findAll('li')
    const button = wrapper.find('.pagination li:nth-child(4) button')

    expect(listItems).toHaveLength(6)

    button.trigger('click')

    expect(actions.setPageIndex).toHaveBeenCalled()
  })
})
