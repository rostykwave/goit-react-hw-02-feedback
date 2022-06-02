import { Component } from 'react';
// import PropTypes from 'prop-types';
import s from './Feedbacks.module.css';

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
    total: 0,
    positiveFeedback: 0,
  };

  handleGood = () => {
    this.setState(state => ({
      good: state.good + 1,
    }));

    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };

  handleNeutral = () => {
    this.setState(state => ({
      neutral: state.neutral + 1,
    }));

    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };

  handleBad = () => {
    this.setState(state => ({
      bad: state.bad + 1,
    }));

    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };

  countTotalFeedback = () => {
    this.setState(state => ({
      total: state.good + state.neutral + state.bad,
    }));
  };

  countPositiveFeedbackPercentage = () => {
    this.setState(state => ({
      positiveFeedback: ((state.good / state.total) * 100).toFixed(1),
    }));
  };

  render() {
    const { good, neutral, bad, total, positiveFeedback } = this.state;

    return (
      <div className={s.Feedbacks}>
        <h3>Please leave feedback</h3>

        <div className={s['button-set']}>
          <button type="button" onClick={this.handleGood}>
            Good
          </button>
          <button type="button" onClick={this.handleNeutral}>
            Neutral
          </button>
          <button type="button" onClick={this.handleBad}>
            Bad
          </button>
        </div>

        <h3>Statistics</h3>
        <p>
          Good: <span>{good}</span>
        </p>
        <p>
          Neutral: <span>{neutral}</span>
        </p>
        <p>
          Bad: <span>{bad}</span>
        </p>
        <p>
          Total: <span>{total}</span>
        </p>
        <p>
          Positive feedback: <span>{positiveFeedback}%</span>
        </p>
      </div>
    );
  }
}

export default Feedbacks;
