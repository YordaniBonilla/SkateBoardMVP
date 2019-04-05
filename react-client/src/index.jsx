import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import TrickList from './components/TrickList.jsx';
import AddToList from './components/AddToList.jsx';
import AddUrl from './components/AddUrl.jsx';
//import  from './dropdownmenu/Dropdown';
//import registerServiceWorker from './registerServiceWorker';
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
     list: [],
  };
  this.getPost = this.getPost.bind(this)
  this.Post = this.getPost.bind(this)
};
//search how to use componentDidMount

  componentDidMount(){
    this.getPost();
  }
  

getPost (){
  console.log('GetPost:');
  // $.ajax({
  // url: '/urls',
  // method: 'GET',
  // success: (results) => {
  // this.setState({list:results});
  // },
  // error: (xhr, err) => {
  // console.log('err', err);
  // }

  // })
  axios.get('/urls')
    .then(res  => {
      console.log("respuesta endpoit :", res)
   this.setState({list:res.data});
      console.log("respuesta instate :", this.state.list)

    })
  .catch(error => {
    console.log("error endpoint :", error)
  })
}



    
  render() {

     return (

    <div>
      <h1>My Skate Vids</h1>
      <TrickList list={this.state.list} />
      <AddToList list={this.state.list} />
      <AddUrl list={this.state.list} />
      <button onClick={this.getPost}>lets see</button>
    </div>
    );
  };
   
}

ReactDOM.render(<App />, document.getElementById('app'));
