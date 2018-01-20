import { Component } from 'react';
import reactDOM from 'react-dom';

import Header from './components/Header';

class App extends Component {
  render(){
    return (
      <div>
        <Header/>
      </div>
    );
  }
}

reactDOM.render(<App/>, document.getElementById('root'));
