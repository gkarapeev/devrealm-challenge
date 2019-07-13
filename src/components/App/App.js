// 1. React
import React from 'react'
import './App.css'

// 2. Components
import Header from '../Header/Header'

// 3. Packages
import { createBrowserHistory } from 'history'
import { Router, Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

// 4. Data
import routes from '../../routes';

const hist = createBrowserHistory();

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Router history={hist}>
          <Header />
          <Switch>
            {routes.map((route, index) => {
              return (
                <Route path={route.path} component={route.component} key={index} />
              )
            })}
            <Redirect from='/' to='/albums' />
          </Switch>
        </Router>
      </div>
    )
  }
};

const mapStateToProps = state => {
  return state
}

export default connect(mapStateToProps)(App)