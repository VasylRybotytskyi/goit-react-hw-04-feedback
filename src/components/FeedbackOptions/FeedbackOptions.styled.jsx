import styled from 'styled-components';

export const FeedbackButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
`;

export const FeedbackButton = styled.button`
  text-align: center;
  border-radius: 5px;
  border: 1px solid #ccc;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: 600;
  background-color: white;
  color: #333;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #333;
    color: white;
    border-color: #333;
  }
`;
