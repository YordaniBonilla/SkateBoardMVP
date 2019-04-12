import React from 'react';


const Trick = (props) => (
  <form>
  <ol>
   <a href={props.redirect}><li > {props.trickName}</li></a>
  </ol>
  </form>
)
export default Trick;