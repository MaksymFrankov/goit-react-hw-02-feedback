import React from "react";

const Statistics = ({ good, neutral, bad, countTotalFeedback,countPositiveFeedbackPercentage }) => (
    <ul>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {countTotalFeedback()}</li>
        <li>Positive feedback: {countPositiveFeedbackPercentage()}%</li>
    </ul>
);


export default Statistics;