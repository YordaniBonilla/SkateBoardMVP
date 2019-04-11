import React from 'react';


class AddToList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			Tricks: "",
    	
		}
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleAlert = this.handleAlert.bind(this);
		this.addTrick = this.addTrick.bind(this);
		this.traverseToUrl = this.traverseToUrl.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	addTrick(event) {
      this.setState({Tricks: event.target.value});
	}
    
    handleChange(event) {
    this.setState({Tricks: event.target.value});
    //this.setState({Redirect: event.target.value});
    }   
    

    handleSubmit(event) {
    event.preventDefault();
    
    this.setState({ value: event.target.value });

    }

    traverseToUrl(event) {
    this.setState({Tricks: event.target.value})
    }

	render() {
		return (
        <div>
         New:
         <input 
         placeholder = 'Name of Trick to Add'
         onChange={this.handleChange} />

         <p>{ this.state.Tricks }</p>
         
        </div>
		);
	}
}

export default AddToList;