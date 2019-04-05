import React from 'react';
import Trick from './Trick.jsx';

const TrickList = (props) => (
  <div>
    <h4> Click to Watch! </h4>
    There are { props.list.length } tricks .
    { props.list.map((item, i) => <Trick key ={i} trickName={item}/>)}

  </div>
)

export default TrickList;
