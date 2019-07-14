// 1. React
import React from 'react'
import './App.css'

// 2. Components
import Header from '../Header/Header'
import Container from '../Container/Container'

// 3. Packages
import { createBrowserHistory } from 'history'
import { Router, Switch, Route, Redirect } from 'react-router-dom'

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
                <Container key={index}>
                  <Route path={route.path} component={route.component} />
                </Container>
              )
            })}
            <Redirect from='/' to='/albums' />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App