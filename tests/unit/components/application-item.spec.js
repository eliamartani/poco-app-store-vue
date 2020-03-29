import { v4 as v4uuid } from 'uuid'
import { shallowMount } from '@vue/test-utils'
import applicationItem from '../../../src/components/application-item'

describe('application-item.vue', () => {
  it('should mount component without error', () => {
    const wrapper = shallowMount(applicationItem, {
      mocks: {
        $t: () => {},
        newId: () => v4uuid()
      },
      propsData: {
        application: {
          name: 'app 1',
          description: 'description 1',
          categories: ['category 1', 'category 2'],
          subscriptions: [
            { name: 'plan 1', price: 0 },
            { name: 'plan 2', price: 5 }
          ]
        }
      }
    })

    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
