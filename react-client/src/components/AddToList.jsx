import React, {Component} from 'react';


class AddToList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			Tricks: "",
            Redirect:""
    	
		}
		this.handTrickName = this.handleTrickName.bind(this);

		this.handleChange = this.handleChange.bind(this);

        this.handleUrl = this.handleUrl.bind(this);
	}

    handleChange(event) {

    this.setState({Tricks: event.target.value});
    }   
    

    handleTrickName(event) {
    event.preventDefault();

    this.setState({ Tricks: event.target.value });
    }

    handleUrl(event) {
    event.preventDefault();

    this.setState({ Redirect: event.target.value });
    }

	render() {
		return (
        <div>

         <input 
         placeholder = 'Skate Trick'

         onChange={this.handleChange} />

         <input

         placeholder = 'Trick URL'

         onChange={this.handleChange}/>

         <input type='submit' />

        </div>
		);
	}
}

export default AddToList;