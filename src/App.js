import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Particles from 'react-particles-js'

const particleOpt = {
  particles: {
    number: {
      value: 150,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className='background'>
        <div className="App">
          <Navbar />
        </div>
        <Particles params={particleOpt}/>
        </div>
      </BrowserRouter>
      
    );
  }
}

export default App;
