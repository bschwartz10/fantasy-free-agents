import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />)
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined()
  })

  it('should render the Header', () => {
    expect(wrapper.find('Header').length).toEqual(1)
  })

  it('should render the PlayersTableContainerComponent', () => {
    expect(wrapper.find('PlayerTableContainer').length).toEqual(1)
  })



})
