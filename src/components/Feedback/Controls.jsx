import React from "react";

const Controls = ({ onGood, onNeutral, onBad }) => (
    <div>
        <button type="button" onClick={onGood}>Good</button>
        <button type="button" onClick={onNeutral}>Neutral</button>
        <button type="button" onClick={onBad}>Bad</button>
    </div>
);

export default Controls;