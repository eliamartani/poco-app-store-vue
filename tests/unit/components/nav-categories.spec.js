import Vuex from 'vuex'
import { v4 as v4uuid } from 'uuid'
import { createLocalVue, shallowMount } from '@vue/test-utils'
import navCategories from '../../../src/components/nav-categories'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('nav-categories.vue', () => {
  let store

  beforeEach(() => {
    store = new Vuex.Store({
      actions: {
        setCategory: jest.fn()
      },
      getters: {
        categories: () => ['category 1', 'category 2'],
        category: () => null
      }
    })
  })

  it('should mount component without error', () => {
    const wrapper = shallowMount(navCategories, {
      mocks: {
        $t: () => {},
        newId: () => v4uuid()
      },
      store,
      localVue
    })

    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
