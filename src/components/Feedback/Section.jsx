import React from 'react';
import css from './Feedback.module.css';

function Section({ title, children }) {
    return (
        <div>
            <h2 className={css.title}>{title}</h2>
            {children}
        </div>
    );
}

export default Section;
