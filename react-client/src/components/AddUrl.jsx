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

  

   

   handleChange(event) {
    this.setState({value: event.target.value});
  }          
   
   handleSubmit(event) {
    event.preventDefault();
    this.setState({ value: event.target.value });
    alert('A trick was added! Congratulations: ' + this.state.value);
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