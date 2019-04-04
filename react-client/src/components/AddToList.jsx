import React from 'react';


class AddToList extends React.component {
	constructor(props) {
		super(props);
		this.state = {
			Tricks: "",
    	Redirect: "", 
		}
		this.addTrick = this.addTrick.bind(this);
		this.traverseToUrl = this.traverseToUrl.bind(this);
	}

	addTrick(event) {
      this.setState({Tricks: event.target.value})
	}


    traverseToUrl(event) {
    this.setState({Redirect: event.target.value})
    }

	render() {
		return {
        <div>
         
        </div>
		}
	}
}