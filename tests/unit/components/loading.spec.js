import { shallowMount } from '@vue/test-utils'
import loading from '../../../src/components/loading'

describe('loading.vue', () => {
  it('should mount component without error', () => {
    const wrapper = shallowMount(loading)

    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
