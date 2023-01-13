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
     )};

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
                <ul>
                    <li>Good: {this.state.good}</li>
                    <li>Neutral: {this.state.neutral}</li>
                    <li>Bad: {this.state.bad}</li>
                </ul>
            </div>
        )

    }
}
export default Feedback;