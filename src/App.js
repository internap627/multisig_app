import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Particles from 'react-particles-js'
import Dashboard from './components/dashboard/Dashboard';
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'

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
        <div className='page'>
          <div className='background'>
            <div className="App">
              <Navbar />
            </div>
            {/* <Particles params={particleOpt} /> */}

          </div>
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route exact path='/signin' component={SignIn} />
            <Route exact path='/signup' component={SignUp} />
          </Switch>
        </div>

      </BrowserRouter>

    );
  }
}

export default App;
