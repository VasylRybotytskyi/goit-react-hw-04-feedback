import React from 'react';
import {
  FeedbackButton,
  FeedbackButtonWrapper,
} from './FeedbackOptions.styled';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <FeedbackButtonWrapper>
      {options.map(option => (
        <FeedbackButton
          type="button"
          key={option}
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </FeedbackButton>
      ))}
    </FeedbackButtonWrapper>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};
