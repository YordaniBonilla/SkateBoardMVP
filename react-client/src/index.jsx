import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import TrickList from './components/TrickList.jsx';

import AddToList from './components/AddToList.jsx';

import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
    db:[],
  };
};

  componentDidMount(){
    axios.get('/info')
    .then(res  => {

   this.setState({db:res.data});
   console.log('After:',this.state.db)
    })
    .catch(error => {
    console.log("error endpoint :", error)
   }),1000
  }
    
  render() {

     return (

    <div>

      <h1>My Skate Vids</h1>
      
      <TrickList db={ this.state.db } />
      <AddToList db={ this.state.db } />
    </div>
    );
  };
   
}

ReactDOM.render(<App />, document.getElementById('app'));
