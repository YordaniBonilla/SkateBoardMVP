import React from 'react';
import './Trick.css';

const Trick = (props) => (
  <div>
  <ol className="">
   <a href={props.redirect}><li>{props.id}{props.trickName}</li></a>
  </ol>
  </div>
)
export default Trick;