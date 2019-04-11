import React from 'react';


const Trick = (props) => (
  <div>
  <ol>
   <a href={props.redirect}><li >{props.trickName}</li></a>
  </ol>
  </div>
)
export default Trick;