import React from 'react';
import css from './Feedback.module.css';

function FeedbackOptions({ options, feedbackButton }) {
    return (
        <div>
            {options.map(option => (
                <button
                    className={css.button}
                    key={option}
                    onClick={() => feedbackButton(option)}
                >
                    {option}
                </button>
            ))}
        </div>
    );
}

export default FeedbackOptions;
