import React, { Component } from 'react';

class Contact extends Component {
  displayConvo = () =>{
    {this.props.displayConvo(this.props.name)}
  }
  render() {
    return (
      <div key={this.props.name}>
        {/* should render a "name" recieved in props */}
        <h3 onClick={this.displayConvo}>{this.props.name}</h3>
        {/* Should also reieve the displayConvo prop, and call the function onClick */}
      </div>
    );
  }
}

export default Contact;
