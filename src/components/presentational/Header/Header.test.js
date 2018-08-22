import React from 'react'
import { shallow } from 'enzyme'
import Header from './Header'
import logoImage from './logo.png'

describe('Header component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Header />)
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined()
  })

  it('should show NFL Player list', () => {
    const messageDiv = wrapper.find('.header')

    expect(messageDiv).toBeDefined()
    expect(messageDiv.text()).toEqual('NFL Player List')
  })

  it('should show rotogrinders logo', () => {
    const image = wrapper.find('.header-logo')

    expect(image).toBeDefined()
    expect(image.prop('src')).toEqual(logoImage)
  })

  it('should match snapshot with all data passed in correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })

})
