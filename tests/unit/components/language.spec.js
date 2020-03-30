import { shallowMount } from '@vue/test-utils'
import language from '../../../src/components/language'

describe('language.vue', () => {
  it('should mount component without error', () => {
    const wrapper = shallowMount(language, {
      mocks: {
        $t: jest.fn()
      }
    })

    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
