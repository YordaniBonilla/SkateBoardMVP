import React, {Component} from 'react';

class AddUrl extends Component {
  constructor(props){
    super(props);
    this.state = {
    	Redirect: "", 
    };
        this.handleAlert = this.handleAlert.bind(this);
    	this.handleChange = this.handleChange.bind(this);
    	this.handleSubmit = this.handleSubmit.bind(this);
    }

  
   //or this is where i make the post
   //componentDidMount() {
    // fetch('/users')
    // .then(res => res.json())
  // }

   handleChange(event) {
    this.setState({Redirect: event.target.value});
  }          
   //here is where i think i should make the post to server
   handleSubmit(event) {
    event.preventDefault();
    
    this.setState({ Redirect: event.target.value });
    //alert('A trick was added! Congratulations: ' + this.state.value);
  }

  handleAlert(event) {
  alert('A url was added! Congratulations: ' + this.state.value);
  event.preventDefault();
  }

  render() {
  	return (
  	
  	
      <div>
        Url:
        <input 
         type='search'
         name='name'  
         value={this.state.value} 
         onChange={this.handleChange}
         placeholder='Url of Vid' />

        <input 
         type='submit'
         onSubmit={this.handleSubmit}
         onClick={this.handleAlert}
         value='Save' />

        <p>{ this.state.value }</p>

      </div>

    
  
);
  }

}

export default AddUrl;