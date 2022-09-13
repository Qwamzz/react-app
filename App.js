import React from 'react';
import "./App.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = 
    {
      name: "Kwame"
    }

    this.handleClick= (e) => {
      console.log('this button was clicked')
    }  
   
    this.handleMouseOver= (e) => {
      console.log('Stop that tickles')
    }  
   
    this.handleCopy= (e) => {
       console.log('Stop stealing my content')
    } 
     
  }
 

  render() {
    return (
      <div className="App">
        <h1>REACT APP</h1>
        <button onClick={this.handleClick}>Click Me</button>
        <button onMouseOver={this.handleMouseOver}>Hover over Me</button>
        <p onCopy={this.handleCopy}>This here is my first react app</p>          
      </div>
    )
  }
}

export default App;
