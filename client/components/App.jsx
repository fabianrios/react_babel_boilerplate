/*
    ./client/components/App.jsx
*/
import React from 'react';

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      horario: new Date().toLocaleTimeString(),
      message: 'Hello!',
      seconds: 0,
      tick: function() {
        //this.setState({seconds: this.seconds + 1});
        console.log(this.message); // null
      }
    };
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick() {
      this.state.tick();
  }
  
  render() {
    return (
     <div style={{textAlign: 'center'}}>
        <h1 onClick={this.handleClick}>Hello World</h1>
        <h3>{this.state.horario}</h3>
      </div>);
  }
  
}

App.propTypes = {

};
App.defaultProps = {

};

export default App;