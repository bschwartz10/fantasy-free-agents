import React from 'react'
import { shallow } from 'enzyme'
import PlayerTableContainer from './PlayerTableContainer'

describe('PlayerTableContainer component', () => {
  let wrapper;
  let mockPlayer;
  let mockPlayers;

  beforeEach(() => {
    wrapper = shallow(<PlayerTableContainer />)
    wrapper.setState({players: mockPlayers, allPlayers: mockPlayers, loading: false})
    mockPlayer = {
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
    mockPlayers = [
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
      },
      {
        adp: "118.48",
        birthdate: "658990800",
        cbs_id: "1691489",
        college: "Texas",
        draft_team: "BUF",
        draft_year: "2013",
        espn_id: "15839",
        height: "69",
        id: "11239",
        jersey: "11",
        kffl_id: "27802",
        name: "Marquise Goodwin",
        position: "WR",
        rotoworld_id: "8461",
        sportsdata_id: "bf52ff53-35a6-4696-ac6d-3fa952dc2c87",
        stats_global_id: "507478",
        stats_id: "26701",
        team: "SFO",
        weight: "179",
      }
    ]
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined()
  })

  it('should match snapshot with all data passed in correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('sorting players by adp will list players in descending order', () => {
    wrapper.instance().sortPlayers('adpSorted', 'adp')
    expect(wrapper.state('players')[0].name).toEqual('Derrick Coleman')
  })

  it('sorting players by weight will list players in ascending order', () => {
    wrapper.instance().sortPlayers('weightSorted', 'weight')
    expect(wrapper.state('players')[0].name).toEqual('Marquise Goodwin')
  })

  it('filters players by one position', () => {
    wrapper.setState({positions: ['RB']})
    wrapper.instance().filterPlayersByPosition()
    expect(wrapper.state('players').length).toEqual(2)
  })

  it('filters players by two positions', () => {
    wrapper.setState({positions: ['RB', 'WR']})
    wrapper.instance().filterPlayersByPosition()
    expect(wrapper.state('players').length).toEqual(3)
  })

  it('filters players by substring of name', () => {
    const e = {
      target: {
        value: 'Good'
      }
    }
    wrapper.instance().handleChange(e)
    expect(wrapper.state('players').length).toEqual(1)
  })

})
