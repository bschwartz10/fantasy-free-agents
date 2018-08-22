import React from 'react';
import { shallow } from 'enzyme';
import PlayerRow from './PlayerRow';

describe('PlayerRow component', () => {
  let wrapper;

  beforeEach(() => {
    const player = {
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
      weight: "233",
    }
    wrapper = shallow(<PlayerRow player={player}/>)
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined()
  })

  it('render player with correct attributes', () => {
    const playerRow = wrapper.find('.player-row')

    expect(playerRow.find('.name').text()).toEqual('Derrick Coleman')
    expect(playerRow.find('.position').text()).toEqual('RB')
    expect(playerRow.find('.team').text()).toEqual('ARI')
    expect(playerRow.find('.height').text()).toEqual('72')
    expect(playerRow.find('.weight').text()).toEqual('233')
    expect(playerRow.find('.adp').text()).toEqual('400')
  })

  it('should match snapshot with all data passed in correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })

})
