import React, {Component} from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      currentLight: "green",
      numberOfSecondsLeft: this.getColorTimeOutSeconds("green") / 1000,
    }

    setTimeout(this.wakeUpEverySecond, 1000);
  }

  isLightON = (lightName) => {
    return (this.state.currentLight === lightName);
  }

  getNextLight = (currentLight) => {
    if (currentLight === "green") return "yellow";
    if (currentLight === "yellow") return "red";
    if (currentLight === "red") return "green";
  }

  getColorTimeOutSeconds = (currentLight) => {
    if (currentLight === "green") return 5000;
    if (currentLight === "yellow") return 2000;
    if (currentLight === "red") return 2000;
  }

  wakeUpEverySecond = () => {
    let numberOfSecondsLeft = this.state.numberOfSecondsLeft;
    if (numberOfSecondsLeft > 0) {
      --numberOfSecondsLeft;
    }

    if (numberOfSecondsLeft === 0) {
      let nextLight = this.getNextLight(this.state.currentLight);
      numberOfSecondsLeft = this.getColorTimeOutSeconds(nextLight) / 1000;
      this.setState({currentLight: nextLight});
    }
    this.setState({numberOfSecondsLeft});

    setTimeout(this.wakeUpEverySecond, 1000);
  }

  render() {
    let numberOfSecondsLeft = this.state.numberOfSecondsLeft;
    return (
      <div id="traffic-light">
        <div className={`bulb ${this.isLightON("red") ? "red" : "#111"}`}></div>
        <div className={`bulb ${this.isLightON("yellow") ? "yellow" : "#111"}`}></div>
        <div className={`bulb ${this.isLightON("green") ? "green" : "#111"}`}>{this.isLightON("green") ? numberOfSecondsLeft : ""}</div>
      </div>
    );
  }
}

export default App;
