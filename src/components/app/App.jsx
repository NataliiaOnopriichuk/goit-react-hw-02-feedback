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
  };

  addToBtnNeutral = () => {
    this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
  };

  addToBtnBad = () => {
    this.setState(prevState => ({ bad: prevState.bad + 1 }));
  };

  countTotalFeedback = () => {
    this.setState(state => ({
      ...state,
      total: state.good + state.neutral + state.bad,
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
            total={this.countTotalFeedback}
            // positivePercentage={5}
          />
        </Section>
      </div>
    );
  }
}

export default App;
