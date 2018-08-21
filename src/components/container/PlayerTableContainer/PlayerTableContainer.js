import React, { Component } from 'react';

import { fetchPlayers } from './apiCalls';

import PlayerTable from '../../presentational/PlayerTable';
import PlayerTableFilters from '../../presentational/PlayerTableFilters';

class PlayerTableContainer extends Component {
  state = {
    players: [],
    positions: []
  }

  componentDidMount = () => {
    this.fetch()
  }

  fetch = async () => {
    const players = await fetchPlayers();
    this.setState({ players });
  }

  handleChange = (e) => {
    console.log(this.state.players);
    const value = e.target.value
    let updatedList = this.state.players
    updatedList = updatedList.filter((player) => {
      return player.name.toLowerCase().search(value.toLowerCase()) !== -1
    })
    this.setState({players: updatedList})
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
        this.filterPlayers()
      },
    )
  }

  filterPlayers = async () => {
    let players = await fetchPlayers()
    if (this.state.positions.length >= 1) {
      players = players.filter((player) => this.state.positions.includes(player.position))
      this.setState({ players })
    }
    else {
      this.fetch()
    }
  }

  render() {
    const { players } = this.state;
    return (
      <div>
        <PlayerTableFilters toggleChange={this.toggleChange} handleChange={this.handleChange} />
        <PlayerTable players={players} />
      </div>
    );
  }
}

export default PlayerTableContainer;
