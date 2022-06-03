import { Component } from 'react';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';
import Notification from './Notification';
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
    positivePercentage: 0,
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
      positivePercentage: parseFloat(
        ((state.good / state.total) * 100).toFixed(1)
      ),
    }));
  };

  render() {
    const { good, neutral, bad, total, positivePercentage } = this.state;

    return (
      <div className={s.Feedbacks}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={{
              onGood: 'Good',
              onNeutral: 'Neutral',
              onBad: 'Bad',
            }}
            onLeaveFeedback={{
              onGood: this.handleGood,
              onNeutral: this.handleNeutral,
              onBad: this.handleBad,
            }}
          ></FeedbackOptions>
        </Section>

        <Section title="Statistics">
          {!total > 0 && (
            <Notification message="There is no feedback"></Notification>
          )}

          {total > 0 && (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            ></Statistics>
          )}
        </Section>
      </div>
    );
  }
}

export default Feedbacks;
