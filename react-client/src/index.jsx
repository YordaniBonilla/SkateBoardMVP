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
     db:[]
  };
  //this.getPost = this.getPost.bind(this)
  //this.Post = this.getPost.bind(this)
};
//search how to use componentDidMount

  componentDidMount(){
     this.db = setInterval(() => {
       axios.get('/urls')
    .then(res  => {
      console.log("respuesta endpoit :", res.data )

   this.setState({db:res.data});
      console.log('STATE:',this.state.db[0].id)

    })
    .catch(error => {
    console.log("error endpoint :", error)
   }),1000
  }
 );  //this.getPost();
  
}
  
  componentWillUnmount() {
    clearInterval(this.db);
  }
//getPost (){
  //console.log('GetPost:');
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
 
//}



    
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
