import { Component } from 'react';
import { observable } from 'mobx';

import { observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools';
import ReactDOM from 'react-dom';

import rSlider from 'rslider';
const {RSlider, RSliderArrowL, RSliderArrowR, RSliderItems, RSliderPagination} = rSlider;


@observer
class App extends Component {
  render() {
    return (
      <div>
      <RSlider name="example1">
        <RSliderItems>
              <div>item 1</div>
              <div>item 2</div>
          </RSliderItems>
   
          <RSliderArrowL />
          <RSliderArrowR />
          <RSliderPagination />
      </RSlider>
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
