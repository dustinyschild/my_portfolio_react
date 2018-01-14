import { Component } from 'react';
import reactDOM from 'react-dom';

class App extends Component {
  render(){
    return (
      <div>
        App
      </div>
    );
  }
}

reactDOM.render(<App/>, document.getElementById('root'));
