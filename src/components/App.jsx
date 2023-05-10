import React, { Component } from 'react';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';
import Notification from './Notification';
import { countPositiveFeedbackPercentage, countTotalFeedback } from 'utils';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onHandleClick = e => {
    const { value } = e.target.attributes.option;
    this.setState({ [value]: this.state[value] + 1 });
  };

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.onHandleClick}
          />
        </Section>

        <Section title="Statistics">
          {countTotalFeedback(
            this.state.good,
            this.state.neutral,
            this.state.bad
          ) === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={countTotalFeedback(
                this.state.good,
                this.state.neutral,
                this.state.bad
              )}
              positivePercentage={countPositiveFeedbackPercentage(
                countTotalFeedback(
                  this.state.good,
                  this.state.neutral,
                  this.state.bad
                ),
                this.state.good
              )}
            />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
