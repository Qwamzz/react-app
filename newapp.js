import React from 'react';
import "./App.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = 
    {
      name: "Kwame"
    }

    this.handleChange = (e) => {
       this.setState({
         name: e.target.value
       })
    }
 
    this.handleSubmit = (e) => {
      e.preventDefault();
      console.log('the form was submitted by', this.state.name)
    }
  }
  