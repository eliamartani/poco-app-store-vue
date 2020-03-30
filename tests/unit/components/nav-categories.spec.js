import Vuex from 'vuex'
import { v4 as v4uuid } from 'uuid'
import { createLocalVue, shallowMount } from '@vue/test-utils'
import navCategories from '../../../src/components/nav-categories'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('nav-categories.vue', () => {
  let actions
  let getters
  let store
  let wrapper

  beforeEach(() => {
    actions = {
      setCategory: jest.fn()
    }

    getters = {
      categories: () => ['category 1', 'category 2'],
      category: () => null
    }

    store = new Vuex.Store({
      actions,
      getters
    })

    wrapper = shallowMount(navCategories, {
      mocks: {
        $t: jest.fn(),
        newId: () => v4uuid()
      },
      store,
      localVue
    })
  })

  it('should mount component without error', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('should read getter', () => {
    expect(wrapper.vm.categories).toHaveLength(2)
  })

  it('should trigger action call', () => {
    const firstCategoryButton = wrapper.find('.nav-menu button')

    firstCategoryButton.trigger('click')

    expect(actions.setCategory).toHaveBeenCalled()
  })
})
