import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Particles from 'react-particles-js'
import Dashboard from './components/dashboard/Dashboard';
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import AddTransaction from './components/coins/AddTransaction'
import firebase from './config/fbConfig'

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
  state = {
    user: null,
    apiCoins: []
  }

  authListener() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user })
      }
      else {
        this.setState({ user: null })
      }
    })
  }

  storeUser = (user) => {
    this.setState({ user })
  }

  componentDidMount() {
    this.authListener()
    fetch("https://api.coinmarketcap.com/v1/ticker/?limit=100")
        .then(res => res.json())
        .then(res => this.setState(
          {  apiCoins: [...res]}
        ))
  }

  render() {
    return (
      <BrowserRouter>
        <div className='page'>
          <div className="App">
            <Navbar user={this.state.user} />
          </div>
          <div className='background'>
            <Particles params={particleOpt} width={'100%'} height={'100%'} />
          </div>
          <Switch>
            {
              this.state.user &&
              <Route exact path='/' render={() => <Dashboard 
                user={this.state.user}
                apiCoins={this.state.apiCoins}
                />} />
            }

            <Route exact path='/signin' render={(props) => <SignIn storeUser={this.storeUser} />} />
            <Route exact path='/signup' component={SignUp} />
          <Route exact path='/addtransaction' render={(props) => <AddTransaction coins={this.state.apiCoins} user={this.state.user}/>} /> 
          </Switch>
        </div>

      </BrowserRouter>

    );
  }
}

export default App;
