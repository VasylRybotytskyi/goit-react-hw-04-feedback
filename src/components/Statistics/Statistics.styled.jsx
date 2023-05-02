import styled from 'styled-components';

export const Feedback = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  border-radius: 5px;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.15);

  span:nth-child(n) {
    font-size: 18px;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
  }

  span:nth-child(n) > :first-child {
    margin-right: 10px;
    font-weight: bold;
  }

  span:nth-child(n) > :last-child {
    font-weight: bold;
  }

  span:nth-child(1) {
    color: #4caf50;
  }

  span:nth-child(2) {
    color: #9e9e9e;
  }

  span:nth-child(3) {
    color: #f44336;
  }

  span:nth-child(5) {
    color: #4caf50;
  }
`;
