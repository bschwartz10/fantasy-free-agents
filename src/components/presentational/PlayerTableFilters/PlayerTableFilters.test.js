import React from 'react'
import { shallow } from 'enzyme'
import PlayerTableFilters from './PlayerTableFilters'

describe('PlayerTableFilters component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<PlayerTableFilters toggleChange={jest.fn()} handleClick={jest.fn()} />)
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined()
  })

  it('render boxes with correct labels', () => {
    expect(wrapper.find('.qb').first().children().text()).toEqual('QB')
    expect(wrapper.find('.rb').first().children().text()).toEqual('RB')
    expect(wrapper.find('.wr').first().children().text()).toEqual('WR')
    expect(wrapper.find('.te').first().children().text()).toEqual('TE')
  })

  it('should match snapshot with all data passed in correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })

})
