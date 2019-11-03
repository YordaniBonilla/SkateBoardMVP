import React from 'react';
import styles from './Trick.css';

const Trick = (props) => (
  <div>
  <ol>
     <li style={{display:"flex",flexDirection:"column"}}>
       <p className={styles.color}>{props.trickName}</p>
       <a  href={props.redirect}>
         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR6A0934fqdhTrho9yCmEBgO1vDRPPA_ws3rdGIfZd-MMYAjwHs" height="200px" width="auto"/>
       </a>
       <h4>{props.id}</h4>
       <button>Delete</button>
     </li>
  </ol>
  </div>
)

export default Trick;