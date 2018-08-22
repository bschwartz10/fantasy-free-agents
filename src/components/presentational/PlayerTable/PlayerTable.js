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
          <th>Name <FontAwesomeIcon onClick={(e) => handleClick(e, 'nameSorted', 'name')} icon="sort" /></th>
          <th>Position <FontAwesomeIcon onClick={(e) => handleClick(e, 'positionSorted', 'position')} icon="sort" /></th>
          <th>Team <FontAwesomeIcon onClick={(e) => handleClick(e, 'teamSorted', 'team')} icon="sort" /></th>
          <th>Height <FontAwesomeIcon onClick={(e) => handleClick(e, 'heightSorted', 'height')} icon="sort" /></th>
          <th>Weight <FontAwesomeIcon onClick={(e) => handleClick(e, 'weightSorted', 'weight')} icon="sort" /></th>
          <th>Adp <FontAwesomeIcon onClick={(e) => handleClick(e, 'adpSorted', 'adp')} icon="sort" /></th>
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
