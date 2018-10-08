import React, { Component } from 'react';
import { Header, Button } from 'semantic-ui-react';
import axios from 'axios'

class Home extends Component {
  state = { coins: {} }

  click = () => {
    axios.post('/api/coins?coin=btc')
      .then( res => { debugger })
  }
  
  render() {
    return (
      <Button onClick={this.click}>
        Click me!
      </Button>
    );
  }
}

export default Home;

