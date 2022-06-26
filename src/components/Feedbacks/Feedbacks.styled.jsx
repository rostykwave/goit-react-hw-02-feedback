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
      return p.theme.colors.good;
    case 'Bad':   
      return p.theme.colors.bad;
    case 'Neutral':
      return p.theme.colors.neutral;
    default:
      return p.theme.colors.light;
  }
}};
  
 color:${p => {
  switch (p.children) {
    case 'Good':
      return p.theme.colors.light;
    case 'Bad':
      return p.theme.colors.light;
    default:
      return p.theme.colors.dark;
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
