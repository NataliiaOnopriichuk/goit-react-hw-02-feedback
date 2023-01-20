import { Component } from 'react';
import { Statistics } from '../Statistics/Statistics';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import { Section } from '../Section/Section';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addToBtnGood = () => {
    this.setState(prevState => ({ good: prevState.good + 1 }));
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };

  addToBtnNeutral = () => {
    this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
    this.countTotalFeedback();
  };

  addToBtnBad = () => {
    this.setState(prevState => ({ bad: prevState.bad + 1 }));
    this.countTotalFeedback();
  };

  countTotalFeedback = () => {
    this.setState(prevState => ({
      ...prevState,
      total: prevState.good + prevState.neutral + prevState.bad,
    }));
  };

  countPositiveFeedbackPercentage = () => {
    this.setState(prevState => ({
      ...prevState,
      positivePercentage: (prevState.good / 100) * prevState.total,
    }));
  };

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={{
              good: this.addToBtnGood,
              neutral: this.addToBtnNeutral,
              bad: this.addToBtnBad,
            }}
            onLeaveFeedback={2}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.state.total}
            positivePercentage={this.state.positivePercentage}
          />
        </Section>
      </div>
    );
  }
}

export default App;
