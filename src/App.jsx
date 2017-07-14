import React, { Component } from 'react';
import { observable } from 'mobx';

import { observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools';
import ReactDOM from 'react-dom';

import rSlider from 'rslider';

@observer
class App extends Component {
  render() {
    return (
      <div>
        <button onClick={this.onReset}>
          Seconds passed: {this.props.appState.timer}
        </button>
        <DevTools />
      </div>
    );
  }

  onReset = () => {
    this.props.appState.resetTimer();
  }
};

export default App;
