import React from 'react';
import { FormGroup, Checkbox, FormControl } from 'react-bootstrap';

import './PlayerTableFilters.css';

const PlayerTableFilters = ({toggleChange, handleChange}) => {

  return (
    <div className="PlayerTableFilters">
      <FormGroup>
        <Checkbox className="qb" inline onChange={(e) => toggleChange(e, 'QB')}>QB</Checkbox>
        <Checkbox className="rb" inline onChange={(e) => toggleChange(e, 'RB')}>RB</Checkbox>
        <Checkbox className="wr" inline onChange={(e) => toggleChange(e, 'WR')}>WR</Checkbox>
        <Checkbox className="te" inline onChange={(e) => toggleChange(e, 'TE')}>TE</Checkbox>
      </FormGroup>
      <FormControl type="text" placeholder="Search by Name" onChange={(e) => handleChange(e)} />
    </div>
  )
}

export default PlayerTableFilters;
