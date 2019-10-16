// Load necessary libraries
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import { Route } from 'react-router';

// Load containers
import PSP from './containers/psp/psp.js';
import Contact from './containers/static/contact.js';

// Load components
import Header from './components/header.js';

// Load store
import store from './store.js';

import './common.scss'

class App extends Component {
  render() {
    return (
      <Router>
        <Provider store={store}>
          <div className="App">
            {/** Load header */}
            <Header />

            {/** Load dynamic components */}
            <Switch>
              <Route path='/' exact component={PSP}></Route>
              <Route path='/contact' component={Contact}></Route>
            </Switch>

          </div>
        </Provider>
      </Router>
    );
  }
}

export default App;
