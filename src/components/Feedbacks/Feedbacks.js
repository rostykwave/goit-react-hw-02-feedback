import { Component } from 'react';
import PropTypes from 'prop-types';

class Feedbacks extends Component {
  // static defaultProps = {
  //     InitialValue:0,
  // }

  // static propTypes = {
  //     //
  // }

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleGood = () => {
    console.log('click');
    this.setState(state => ({
      good: state.good + 1,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    console.log(good);

    return (
      <div>
        <p>Please leave feedback</p>
        <button type="button" onClick={this.handleGood}>
          Good
        </button>
        <button type="button">Neutral</button>
        <button type="button">Bad</button>

        <p>Statistics</p>
        <p>
          Good<span>{good}</span>
        </p>
        <p>
          Neutral<span>2</span>
        </p>
        <p>
          Bad<span>2</span>
        </p>
      </div>
    );
  }
}

export default Feedbacks;
