import React, { Component } from 'react';
import axios from 'axios';

class AddToList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			trickName: "",
            trickUrl:""
    	
		}

		this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
	}

    handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
    }   
    
    
    handleSubmit(event) {
      event.preventDefault();
      this.sendUrl();
    }

    sendUrl () {
      const { trickName, trickUrl } = this.state;
      axios.post('/add', {
        trickName: trickName,
        urlName: trickUrl
      })
      .then(function (response) {
      console.log(response);
      })
      .catch(function (error) {
      console.log(error);
      });
    }

	render() {

		return (
        <form  onSubmit={this.handleSubmit} >

         <input 
         name = 'trickName'
         placeholder = 'Skate Trick'

         onChange={this.handleChange} />

         <input
         name = 'trickUrl'
         placeholder = 'Trick URL'

         onChange={this.handleChange}/>

         <input type='submit' value='Add Url'/>

        </form>
		);
	}
}

export default AddToList;