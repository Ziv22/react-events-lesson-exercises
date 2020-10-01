import React, { Component } from 'react';

export const Home = function () {
  return <div className="home">Welcome to our page</div>
  // Should return some JSX with a div that has a class "home" and the text "Welcome to our page"
}

export const About = function () {
  return <div className="about">It's great here</div>
  // Should return some JSX with a div that has a class "about" and the text "It's great here"
}

export class SpotCheck2 extends Component {
  constructor(){
    super()
    this.state = {
      showHome:true
    }
  }
  // Your SpotCheck2 should render the Home Component, the About Component, and a Toggle Button
  // Either the Home or About component should be rendered when you press the toggle button
  // You should have a state with the property "showHome", with a value of true or false
  // You must use state and setState, to change the value of showHome
  changeState = () =>{
    this.setState({
      showHome:!this.state.showHome
    })
  }

  render() {
    return (
      <div >
          <button onClick={this.changeState}>Toggle</button>
          {this.state.showHome ? <Home/> : <About/>}          
      </div>
    );
  }
}


