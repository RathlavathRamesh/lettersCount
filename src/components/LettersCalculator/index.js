// Write your code here.
import './index.css'
import {Component} from 'react'

class LettersCalculator extends Component {
  state = {count: 0}

  onchangeinput = event => {
    const str = event.target.value
    this.setState({count: str.length})
  }

  render() {
    const {count} = this.state
    return (
      <div className="classContainer">
        <div className="textContainer">
          <h1 className="heading">
            Calculate The
            <br /> Letters You
            <br /> enter
          </h1>
          <label htmlFor="Enter the phrase" className="para">
            Enter the phrase
          </label>
          <input
            id="Enter the phrase"
            type="text"
            placeholder="Search"
            className="input"
            onChange={this.onchangeinput}
          />
          <p className="but">{`No.of letters: ${count}`}</p>
        </div>
        <img
          className="img"
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png "
          alt="letters Calculator"
        />
      </div>
    )
  }
}
export default LettersCalculator
