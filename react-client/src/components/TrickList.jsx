import React from 'react';
import Trick from './Trick.jsx';

const TrickList = (props) => (
  <div>
    <h4> Click to Watch! </h4>
{props.db.length > 1 ? `You have ${props.db.length} tricks available add more below` : `You have ${props.db.length} total trick add more`}
{props.db.map(e => <Trick key={e.id} trickName={e.trick} redirect={e.redirect}/>)}
  </div>
)

export default TrickList;
//{props.list.length > 1 ? `There are ${props.list.length}total tricks available` : `There is {props.list.length} total trick`}