import '../style/main.scss';
import './_App.scss';
import * as routes from '../constants/routes';

import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './Header';
import ErrorNotImplemented from './ErrorNotImplemented';
import MainNav from './MainNav';
import Sidebar from './Sidebar';
//import AboutMe from './components/AboutMe';

class App extends React.Component {
  render(){
    return (
      <div>
        <Header />
        <MainNav location={window.location} />
        <Sidebar />
        <div className='main-view'>
          <Switch>
            <Route
              path={routes.ABOUT_ME_ROUTE}
              component={ErrorNotImplemented}
            />
            <Route
              path={routes.MY_WORK}
              component={ErrorNotImplemented}
            />
            <Route
              path={routes.MY_HOME_PROJECTS}
              component={ErrorNotImplemented}
            />
            <Route
              path={routes.GITHUB_DASHBOARD}
              component={ErrorNotImplemented}
            />
            <Route
              path={routes.EMPTY}
              component={ErrorNotImplemented}
            />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
