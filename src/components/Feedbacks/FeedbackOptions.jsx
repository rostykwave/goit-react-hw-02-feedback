import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledButton = styled.button`
    border: none;
  cursor: pointer;
  outline: none;

  padding: 14px 25px;
  border-radius: 5px;

  background-color:${p => {
  switch (p.children) {
    case 'Good':
      return '#37a037';
    case 'Bad':   
      return '#e64545';
    case 'Neutral':
      return '#ffff00';
    default:
      return 'aliceblue';
  }
}};
  
 color:${p => {
  switch (p.children) {
    case 'Good':
      return '#f0f8ff';
    case 'Bad':
      return '#f0f8ff';
    default:
      return '#000000';
  }
}};
  
  &:not(:last-child) {
  margin-right: 7px;
}
`;

const ButtonSet = styled.div`
  text-align: center;
`;

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <ButtonSet >
    <StyledButton
      type="button"
      onClick={onLeaveFeedback.onGood}
    >
      {options.onGood}
    </StyledButton>
    <StyledButton
      type="button"
      onClick={onLeaveFeedback.onNeutral}
    >
      {options.onNeutral}
    </StyledButton>
    <StyledButton
      type="button"
      onClick={onLeaveFeedback.onBad}
    >
      {options.onBad}
    </StyledButton>
  </ButtonSet>
);

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.object.isRequired,
};
