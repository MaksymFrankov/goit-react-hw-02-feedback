import React from "react";

const FeedbackOptions = ({ options, onFeedback }) => {
    return (
      <div>
        {options.map(option => {
          return (
            <li key={option}>
              <button type="button" value={option} onClick={onFeedback}>
                {option}
              </button>
            </li>
          );
        })}
      </div>
    );
  };
  

export default FeedbackOptions;