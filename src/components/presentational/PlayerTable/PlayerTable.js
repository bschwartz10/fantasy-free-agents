import React from 'react';
import { Table } from 'react-bootstrap';
import Proptypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import PlayerRow from '../PlayerRow';

const PlayerTable = ({ players, handleClick }) => {
  return (
    <Table responsive>
      <thead>
        <tr>
          <th className="name">Name <FontAwesomeIcon onClick={(e) => handleClick(e, 'nameSorted', 'name')} icon="sort" /></th>
          <th className="position">Position <FontAwesomeIcon onClick={(e) => handleClick(e, 'positionSorted', 'position')} icon="sort" /></th>
          <th className="team">Team <FontAwesomeIcon onClick={(e) => handleClick(e, 'teamSorted', 'team')} icon="sort" /></th>
          <th className="height">Height <FontAwesomeIcon onClick={(e) => handleClick(e, 'heightSorted', 'height')} icon="sort" /></th>
          <th className="weight">Weight <FontAwesomeIcon onClick={(e) => handleClick(e, 'weightSorted', 'weight')} icon="sort" /></th>
          <th className="adp">Adp <FontAwesomeIcon onClick={(e) => handleClick(e, 'adpSorted', 'adp')} icon="sort" /></th>
        </tr>
      </thead>
      <tbody>
        {players.map(player => <PlayerRow player={player} key={player.id} />)}
      </tbody>
    </Table>
  );
}

PlayerTable.propTypes = {
  players: Proptypes.array,
}

export default PlayerTable;
