import React from "react";
import FeedbackOptions from "./FeedbackOptions";
import Statistics from "./Statistics";
import Section from "./Section";
import Notification from "./Notification";

class Feedback extends React.Component {
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

    handleGood = () => {
        this.setState(prev => ({  

            good: prev.good + 1,
            
        })
     )};

    handleNeutral = () => {
        this.setState(prev => ({  

            neutral: prev.neutral + 1,
            
        })
     )};

    handleBad = () => {
        this.setState(prev => ({  

            bad: prev.bad + 1,
            
        })
        )
    };


    countTotalFeedback = () => {
        return this.state.bad + this.state.good + this.state.neutral;
    }

    countPositiveFeedbackPercentage = () => {
        if (this.state.good >= 1) {
            return Math.round( this.state.good / this.countTotalFeedback() * 100)
        }
        else return 0;
    }

    render() {
        return (
            <div>
               <Section title="Please leave feedback">
                <FeedbackOptions 
                    onGood={this.handleGood}
                    onNeutral={this.handleNeutral}
                    onBad={this.handleBad}
                />
                </Section>
                <Section title="Statistics">
                 {this.countTotalFeedback() >= 1   
                ? <Statistics
                    good={this.state.good}
                    neutral={this.state.neutral}
                    bad={this.state.bad}
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