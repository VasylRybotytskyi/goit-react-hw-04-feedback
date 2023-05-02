import React from 'react';
import PropTypes from 'prop-types';
import { Notification } from 'components/Notification/Notification';
import { Feedback } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  const feedbackGiven = total > 0;
  return (
    <>
      <h2>Statistics</h2>
      {feedbackGiven ? (
        <Feedback>
          <span>Good: {good}</span>
          <span>Neutral: {neutral}</span>
          <span>Bad: {bad}</span>
          <span>Total: {total}</span>
          <span>Positive feedback: {positivePercentage}%</span>
        </Feedback>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
