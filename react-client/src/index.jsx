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
  
};

  componentDidMount(){
    axios.get('/links')
    .then(res  => {

   this.setState({db:res.data});
   console.log('After:',this.state.db[0].id)
    })
    .catch(error => {
    console.log("error endpoint :", error)
   }),1000
  }

  handleCallback(id){
    console.log("callback iD yo id:" ,id)
    // this.setState(this.state.db.id)
  }
    
  render() {

     return (

    <div>

      <h1 className={styles.title} >My Skate Vids</h1>
      <TrickList db={ this.state.db } removeTrick={this.handleCallback}/>
      <AddToList db={ this.state.db } />
      
    </div>
    );
  };
   
}

ReactDOM.render(<App />, document.getElementById('app'));
