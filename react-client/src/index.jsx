import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import TrickList from './components/TrickList.jsx';
import AddToList from './components/AddToList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
     list:[]
  };
};
//search how to use componentDidMount
  componentDidMount() {
    $.ajax({
      type: 'POST',
      url: '/',
      data: '',
      success: (data) => {
        this.setState({
          list: data
        })
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  


  getData(){
      this.setState({list: data });
    }
    
    
  

  componentDidMount(){
    this.getData();
  }
  

  render() {
     return (
    <div>
      <h1>Skateboarding Vids</h1>
      <TrickList list={props.state.list}/>
      <AddToList />
      <SearchBox/>
    </div>
    );
  };
   
}

ReactDOM.render(<App />, document.getElementById('app'));