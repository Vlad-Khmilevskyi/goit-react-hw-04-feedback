import React, { Component } from 'react';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';
import Notification from './Notification';
import css from './Feedback.module.css';

class Feedback extends Component {
    state = {
        Good: 0,
        Neutral: 0,
        Bad: 0,
    };

    feedbackButton = feedback => {
        this.setState(prevState => ({
            [feedback]: prevState[feedback] + 1,
        }));
    };

    countTotalFeedback = () => {
        const { Good, Neutral, Bad } = this.state;
        return Good + Neutral + Bad;
    };

    countPositiveFeedbackPercentage = () => {
        const total = this.countTotalFeedback();
        if (total > 0) {
            return Math.round((this.state.Good / total) * 100);
        } else {
            return 0;
        }
    };

    render() {
        const { Good, Neutral, Bad } = this.state;
        const totalFeed = this.countTotalFeedback();
        const positiveFeedback = this.countPositiveFeedbackPercentage();

        return (
            <div className={css.section}>
                <Section title="Please leave feedback">
                    <FeedbackOptions
                        options={['Good', 'Neutral', 'Bad']}
                        feedbackButton={this.feedbackButton}
                    />
                </Section>

                <Section title="Statistics">
                    {totalFeed > 0 ? (
                        <Statistics
                            good={Good}
                            neutral={Neutral}
                            bad={Bad}
                            total={totalFeed}
                            positiveFeedback={positiveFeedback}
                        />
                    ) : (
                        <Notification message="There is no feedback" />
                    )}
                </Section>
            </div>
        );
    }
}

export default Feedback;
