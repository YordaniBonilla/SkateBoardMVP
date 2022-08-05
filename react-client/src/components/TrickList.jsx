import React from 'react';
import Trick from './Trick.jsx';
import styles from './TrickList.css';
const TrickList = (props) => (
  <div>
    <h4> Click to Watch! </h4>

<p className={styles.total}>{props.db.length > 1 ? `You have ${props.db.length} tricks available add more below` : `You have ${props.db.length} total trick add more`}</p>
<div className={styles.container}>
{props.db.map(e => <Trick key={e.id} id={e.id} trickName={e.trick} redirect={e.redirect} deleteTrick={props.deleteTrick}/>)}
</div>

  </div>
)

export default TrickList;
//{props.list.length > 1 ? `There are ${props.list.length}total tricks available` : `There is {props.list.length} total trick`}

//Why it prints the object but wont let me access a value alone except when i use map
// props.db.map(e => e.id)
// JSON.stringify(props.db[1]), console.log(props.db[1].id)