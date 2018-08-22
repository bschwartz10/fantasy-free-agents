import React from 'react';
import Proptypes from 'prop-types';

const PlayerRow = ({ player }) => {
  return (
    <tr className='player-row'>
      <td className="name">{player.name}</td>
      <td className="position">{player.position}</td>
      <td className="team">{player.team}</td>
      <td className="height">{player.height}</td>
      <td className="weight">{player.weight}</td>
      <td className="adp">{player.adp}</td>
    </tr>
  )
}

PlayerRow.propTypes = {
  player: Proptypes.object,
}
export default PlayerRow;
