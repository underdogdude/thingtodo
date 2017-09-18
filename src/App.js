import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    bright : ""
  }
  componentDidMount() {
    fetch('https://api.giphy.com/v1/gifs/random?api_key=TQQEUOIy9DyOKrUEyJZ9t8C8n8H5uLvS&tag=&rating=G')
    .then( res => res.json() )
    .then( json => json.data.image_url )
    .then( (bright) => {
      this.setState({
        bright : bright 
      })
    }) 
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2 className="bright"></h2>
        </div>
        <img src  ={this.state.bright} />
        
      </div>
    );
  }
}


export default App;



