import React from 'react';
import Trick from './Trick.jsx';

const TrickList = (props) => (
  <div>
    <h4> List Component </h4>
    There are { props.list.length } tricks.
    { props.list.map((item, i) => <Trick key ={i} item={item}/>)}

  </div>
)

export default TrickList;
