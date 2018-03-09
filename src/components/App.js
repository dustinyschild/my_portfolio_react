import '../style/main.scss';
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
//import AboutMe from './components/AboutMe';

class App extends React.Component {
  render(){
    return (
      <div>
        <Header />
        <Switch>
          {/* <Route path="/lol" component={AboutMe} /> */}
        </Switch>
      </div>
    );
  }
}

export default App;
