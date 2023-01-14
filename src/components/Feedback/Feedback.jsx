import React from "react";
import Controls from "./Controls";

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
                <h1> Please leave feedback </h1>
                    <Controls 
                    onGood={this.handleGood}
                    onNeutral={this.handleNeutral}
                    onBad={this.handleBad}
                    />
                <h2>Statistics</h2>
                {this.countTotalFeedback() >=1 ? (
                    <ul>
                        <li>Good: {this.state.good}</li>
                        <li>Neutral: {this.state.neutral}</li>
                        <li>Bad: {this.state.bad}</li>
                        <li>Total: {this.countTotalFeedback()}</li>
                        <li>Positive feedback: {this.countPositiveFeedbackPercentage()}%</li>
                    </ul>
                ) : ("There is no feedback")
                }
            </div>
        )

    }
}
export default Feedback;