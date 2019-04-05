import React from 'react';
import Trick from './Trick.jsx';

const TrickList = (props) => (
  <div>
  	{console.log("this is the obj" + props.list)}
    <h4> Click to Watch! </h4>

    {props.list.length > 1 ? `There are ${props.list.length}total tricks available` : `There is {props.list.length} total trick`}  .
    {props.list.map((e, i) => <Trick key ={props.i} trickName={props.e}/>)}
    
  </div>
)

export default TrickList;
