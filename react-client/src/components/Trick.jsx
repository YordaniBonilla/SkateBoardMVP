import React from 'react';
import '../dropdownmenu/Style.css';

class Trick extends React.Component {
  constructor(props) {
  	super(props);

  	this.state = {
       displayMenu: false,
     };
    this.showDropdownMenu = this.showDropdownMenu.bind(this);
    this.hideDropdownMenu = this.hideDropdownMenu.bind(this); 
  };

  showDropdownMenu(event) {
    event.preventDefault();
    this.setState({ displayMenu: true }, () => {
    document.addEventListener('click', this.hideDropdownMenu);
    });
  }

  hideDropdownMenu() {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener('click', this.hideDropdownMenu);
    });

  }

  render() {
  	return (
      <div  className="dropdown" style = {{background:"red",width:"200px"}} >
      <div className="button" onClick={this.showDropdownMenu}>Select </div>
  	  
  	  { this.state.displayMenu ? (
  	  <ul>	
      <li><a className="active" href="#Create Page">{props.}</a></li>
      </ul>
  		):
  		(
  		  null
  		)
  	    }
      </div>
    );
  }
}

export default Trick;