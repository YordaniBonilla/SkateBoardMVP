import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import TrickList from './components/TrickList.jsx';

import AddToList from './components/AddToList.jsx';

import axios from "axios";
import styles from './index.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
    db:[],
    
  };
  this.deleteTrick = this.deleteTrick.bind(this);
  
};

  componentDidMount(){
    axios.get('/links')
    .then(res  => {
   this.setState({db:res.data});
    })
    .catch(error => {
    console.log("error endpoint :", error)
   }),1000
  }

  deleteTrick(id){
    axios.post('/delete', {
      id: id,
    }).then(res  => {
      console.log(res)
       })
       .catch(error => {
       console.log("error endpoint :", error)
      }),1000;
    // this.setState(this.state.db.id)
  }
    
  render() {

     return (

    <div>

      <h1 className={styles.title}  >My Skate Vids</h1>
      <TrickList db={ this.state.db } deleteTrick={this.deleteTrick}/>
      <AddToList db={ this.state.db } />
      
    </div>
    );
  };
   
}

ReactDOM.render(<App />, document.getElementById('app'));
