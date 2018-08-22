import React from 'react'
import { shallow, mount } from 'enzyme'
import PlayerTable from './PlayerTable'

describe('PlayerTable component', () => {
  let wrapper;
  const players = [
    {
      adp: "400",
      birthdate: "656226000",
      cbs_id: "1977109",
      college: "UCLA",
      draft_team: "FA",
      draft_year: "2012",
      espn_id: "15351",
      height: "72",
      id: "11524",
      jersey: "48",
      kffl_id: "26333",
      name: "Derrick Coleman",
      nfl_id: "derrickcoleman/2534871",
      position: "RB",
      rotoworld_id: "8019",
      sportsdata_id: "e0a63251-5428-43a1-88c1-c000215ac5ce",
      stats_global_id: "461705",
      stats_id: "26299",
      team: "ARI",
      weight: "233"
    },
    {
      adp: "1.38",
      birthdate: "775890000",
      cbs_id: "2000877",
      college: "Georgia",
      draft_team: "STL",
      draft_year: "2015",
      espn_id: "2977644",
      height: "73",
      id: "12150",
      jersey: "30",
      kffl_id: "32621",
      name: "Todd Gurley",
      position: "RB",
      rotoworld_id: "10288",
      sportsdata_id: "14263792-d1d3-4b0c-85f7-2a85b4aed6f1",
      stats_global_id: "694641",
      stats_id: "28398",
      team: "LAR",
      weight: "227",
    }
  ]

  beforeEach(() => {
    wrapper = shallow(<PlayerTable players={players} handleClick={jest.fn()} />)
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined()
  })

  it('render a row for each player', () => {
    expect(wrapper.find('tbody').children().length).toEqual(players.length)
  })

  it('render table with correct headers', () => {
    expect(wrapper.find('.name').children().first().text().trim()).toEqual('Name')
    expect(wrapper.find('.position').children().first().text().trim()).toEqual('Position')
    expect(wrapper.find('.team').children().first().text().trim()).toEqual('Team')
    expect(wrapper.find('.height').children().first().text().trim()).toEqual('Height')
    expect(wrapper.find('.weight').children().first().text().trim()).toEqual('Weight')
    expect(wrapper.find('.adp').children().first().text().trim()).toEqual('Adp')
  })


  it('should match snapshot with all data passed in correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })

})
