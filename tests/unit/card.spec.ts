import { mount } from '@vue/test-utils'
import Card from '@/components/Card.vue'

describe('Card', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Card)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('propsData', () => {
    const wrapper = mount(Card, {
      propsData: {
        currencyName: 'Indonesia Rupiah',
        activeNominal: 14000,
        activeCurrency: 'IDR',
        cardCurrency: 'USD',
        rate: 1.04
      }
    })
    expect(wrapper.props().currencyName).toBe('Indonesia Rupiah')
    expect(wrapper.props().activeNominal).toBe(14000)
    expect(wrapper.props().activeCurrency).toBe('IDR')
    expect(wrapper.props().cardCurrency).toBe('USD')
    expect(wrapper.props().rate).toBe(1.04)
  })
})