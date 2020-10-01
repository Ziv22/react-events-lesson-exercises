import React, { Component } from 'react';
import Contact from './Contact';

class List extends Component {
  //should recieve the prop "contact"
  render() {
    const contacts = this.props.contacts
    return (
      <div>
        {contacts.map(c => <Contact name={c} displayConvo={this.props.displayConvo} />)}
      </div>
    );
  }
}

export default List;
