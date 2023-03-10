import React from "react";
import FeedbackOptions from "./FeedbackOptions";
import Statistics from "./Statistics";
import Section from "./Section";
import Notification from "./Notification";
export class Feedback extends React.Component {
    static defaultProps = {
        initialGood: 0,
        initialNeutral: 0,
        initialBad:0,
    }

    state = {
        good : this.props.initialGood,
        neutral: this.props.initialNeutral,
        bad: this.props.initialBad,
    }

    handleChange = event => {
        console.log("click");
        const value = event.target.value;
    
        this.setState(prevState => {
          return {
            [value]: prevState[value] + 1,
          };
        });
      };

  countTotalFeedback = () => {
    const stateValues = Object.values(this.state);
    const totalFeedbacks = stateValues.reduce((acc, value) => acc + value, 0);

    return totalFeedbacks;
  };

    countPositiveFeedbackPercentage = () => {
        if (this.state.good >= 1) {
            return Math.round( this.state.good / this.countTotalFeedback() * 100)
        }
        else return 0;
    }

    render() {
        const { good, neutral, bad } = this.state;
        return (
            <div>
               <Section title="Please leave feedback">
                <FeedbackOptions 
                options={Object.keys(this.state)}
                onFeedback={this.handleChange}
                />
                </Section>
                <Section title="Statistics">
                 {this.countTotalFeedback() >= 1   
                ? <Statistics
                    good={good}
                    neutral={neutral}
                    bad={bad}
                    countTotalFeedback={this.countTotalFeedback}
                    countPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage}
                    />
                : <Notification message="There is no feedback"></Notification>
                 }
                </Section>
            </div>
        )

    }
}
export default Feedback;