import React, { Component } from 'react';

import { fetchPlayers } from './apiCalls';
import { fetchADP } from './apiCalls';

import PlayerTable from '../../presentational/PlayerTable';
import PlayerTableFilters from '../../presentational/PlayerTableFilters';

import Loading from '../../presentational/Loading'

class PlayerTableContainer extends Component {
  state = {
    players: [],
    allPlayers: [],
    positions: [],
    loading: true,
    adpSorted: true,
  }
  componentDidMount = () => {
    this.fetch()
  }

  fetch = async () => {
    const rawPlayers = await fetchPlayers()
    const rawAdp = await fetchADP()

    const adp = rawAdp.reduce((agg, playerAdp) => {
      agg[playerAdp.id] = playerAdp.averagePick
      return agg
    },{})

    const players = rawPlayers
                      .map((player) => ({
                        ...player,
                        name: `${player.name.split(',')[1].trim()} ${player.name.split(',')[0]}`,
                        adp: adp[player.id] ? adp[player.id] : '400'
                      }))
                      .sort((firstPlayer, secondPlayer) => {
                        return firstPlayer.adp - secondPlayer.adp
                      })

    this.setState({ players: players, allPlayers: players, loading: false });
    console.log(this.state.players);
  }

  handleClick = (e, type, attribute) => {
    this.sortPlayers(type, attribute)
  }

  sortPlayers = (type, attribute) => {
    const sorted = this.state[type]
    const sortedCollection =
      attribute === 'adp' ?
        this.sortByAdp(sorted, attribute) :
        this.sortByAttribute(sorted, attribute)

    this.setState( {players: sortedCollection, [type]: !sorted} )
  }

  sortByAttribute = (sorted, attribute) => {
    const { players } = this.state
    let sortedCollection;
    if (sorted) {
      sortedCollection = players.sort((firstPlayer, secondPlayer) => {
        if(firstPlayer[attribute] <= secondPlayer[attribute]) return 1
        if(firstPlayer[attribute] >= secondPlayer[attribute]) return -1
      })
    } else {
        sortedCollection = players.sort((firstPlayer, secondPlayer) => {
          if(firstPlayer[attribute] <= secondPlayer[attribute]) return -1
          if(firstPlayer[attribute] >= secondPlayer[attribute]) return 1
        })
    }
    return sortedCollection
  }

  sortByAdp = (sorted, attribute) => {
    const { players } = this.state
    let sortedCollection;
    if (sorted) {
      sortedCollection = players.sort((firstPlayer, secondPlayer) => {
        return secondPlayer[attribute] - firstPlayer[attribute]
      })
    } else {
        sortedCollection = players.sort((firstPlayer, secondPlayer) => {
          return firstPlayer[attribute] - secondPlayer[attribute]
        })
    }
    return sortedCollection
  }

  toggleChange = (e, position) => {
    let { positions } = this.state
    const index = positions.indexOf(position)
    if (index > -1) {
      positions.splice(index, 1)
    } else {
        positions = [...this.state.positions, position]
      }
    this.setState({ positions }, () => {
      this.filterPlayersByPosition()
    })
  }

  filterPlayersByPosition = () => {
    let players = this.state.allPlayers
    let { positions } = this.state
    if (positions.length >= 1) {
      players = players.filter((player) => positions.includes(player.position))
      this.setState({ players })
    } else {
        this.setState({ players: this.state.allPlayers })
    }
  }

  handleChange = (e) => {
    const { value } = e.target
    let allPlayers = this.state.allPlayers
    const updatedList = allPlayers.filter((player) => {
      return player.name.toLowerCase().search(value.toLowerCase()) !== -1
    })
    this.setState({players: updatedList})
  }

  render() {
    const { players, loading } = this.state;
    if (loading) return <Loading />
    return (
      <div>
        <PlayerTableFilters toggleChange={this.toggleChange} handleChange={this.handleChange} />
        <PlayerTable players={players} handleClick={this.handleClick} />
      </div>
    );
  }
}

export default PlayerTableContainer;
