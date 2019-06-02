import React, {Component} from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      currentLight: "green",
      timeOutSeconds: 5,
      // numberOfSecondsLeft: this.getColorTimeOutSeconds("green") / 1000,
    }

    setTimeout(this.wakeUpEverySecond, 1000);
  }

  wakeUpEverySecond = () => {
    let timeOutSeconds = this.state.timeOutSeconds;
    if(timeOutSeconds > 0) --timeOutSeconds;

    if(timeOutSeconds < 0) {
      this.setState({timeOutSeconds});
      setTimeout(this.wakeUpEverySecond, 1000);
    }
  }

  render() {
    return (
      <div id="traffic-light">
      </div>
    );
  }
}

export default App;
