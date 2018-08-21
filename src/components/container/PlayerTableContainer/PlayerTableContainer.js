import React, { Component } from 'react';

import { fetchPlayers } from './apiCalls';
import { fetchADP } from './apiCalls';

import PlayerTable from '../../presentational/PlayerTable';
import PlayerTableFilters from '../../presentational/PlayerTableFilters';

import Loading from '../../presentational/Loading'

class PlayerTableContainer extends Component {
  state = {
    players: [],
    adp: [],
    loading: true,
    sorted: true
  }
  componentDidMount = async () => {
    const players = await fetchPlayers();
    const adp = await fetchADP()
    const sortedPlayers = players.map((player) => ({
      ...player,
      name: `${player.name.split(',')[1].trim()} ${player.name.split(',')[0]}`
    }))
    const finalPlayers = sortedPlayers.map((player) => {
      adp.forEach((player_adp) => {
        if (player.id === player_adp.id) {
          return player.adp = player_adp.averagePick
        }
        if (!player.hasOwnProperty('adp')) {
          player.adp = '400'
        }
      })
      return player
    })
    const AdpSortedPlayers = finalPlayers.sort((firstPlayer, secondPlayer) => {
      return firstPlayer.adp - secondPlayer.adp
    })

    this.setState({ players: AdpSortedPlayers, adp: adp, loading: false });
    console.log(this.state);
  }

  handleClick = () => {
    const { players, sorted } = this.state
    let AdpSortedPlayers;
    if (sorted) {
      AdpSortedPlayers = players.sort((firstPlayer, secondPlayer) => {
        return secondPlayer.adp - firstPlayer.adp
      })
    } else {
        AdpSortedPlayers = players.sort((firstPlayer, secondPlayer) => {
          return firstPlayer.adp - secondPlayer.adp
        })
    }
    this.setState( {players: AdpSortedPlayers, sorted: !sorted} )
  }

  render() {
    const { players, loading } = this.state;
    if (loading) return <Loading />
    return (
      <div>
        <PlayerTableFilters />
        <PlayerTable players={players} handleClick={this.handleClick} />
      </div>
    );
  }
}

export default PlayerTableContainer;
