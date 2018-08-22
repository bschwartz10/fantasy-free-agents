import React from 'react'
import { shallow } from 'enzyme'
import Loading from './Loading'

describe('Loading component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Loading />)
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined()
  })

  it('should have div with className of spinner', () => {
    const div = wrapper.find('.spinner')

    expect(div).toBeDefined()
  })

  it('should have div with className of double-bounce1', () => {
    const div = wrapper.find('.double-bounce1')

    expect(div).toBeDefined()
  })

  it('should have div with className of double-bounce2', () => {
    const div = wrapper.find('.double-bounce2')

    expect(div).toBeDefined()
  })

  it('should match snapshot with all data passed in correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })

})
