import '../style/main.scss';
import * as routes from '../constants/routes';

import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './Header';
import ErrorNotImplemented from './ErrorNotImplemented';
//import AboutMe from './components/AboutMe';

class App extends React.Component {
  render(){
    return (
      <div>
        <Header />
        <Switch>
          {/* <Route path="/lol" component={AboutMe} /> */}
          <Route
            path={routes.EMPTY}
            component={ErrorNotImplemented}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
