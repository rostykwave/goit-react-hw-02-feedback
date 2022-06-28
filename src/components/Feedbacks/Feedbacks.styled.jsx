import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledButton = styled.button`
  border: none;
  cursor: pointer;
  outline: none;

  padding: 14px 25px;
  border-radius: 5px;

  background-color: ${({ children, theme }) => {
    switch (children) {
      case 'Good':
        return theme.colors.good;
      case 'Bad':
        return theme.colors.bad;
      case 'Neutral':
        return theme.colors.neutral;
      default:
        return theme.colors.light;
    }
  }};

  :hover,
  :focus {
    background-color: ${({ children, theme }) => {
      switch (children) {
        case 'Good':
          return theme.colors.goodAccent;
        case 'Bad':
          return theme.colors.badAccent;
        case 'Neutral':
          return theme.colors.neutralAccent;
        default:
          return theme.colors.light;
      }
    }};
  }

  color: ${({ children, theme }) => {
    switch (children) {
      case 'Good':
        return theme.colors.light;
      case 'Bad':
        return theme.colors.light;
      default:
        return theme.colors.dark;
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
  <ButtonSet>
    <StyledButton type="button" onClick={onLeaveFeedback.onGood}>
      {options.onGood}
    </StyledButton>
    <StyledButton type="button" onClick={onLeaveFeedback.onNeutral}>
      {options.onNeutral}
    </StyledButton>
    <StyledButton type="button" onClick={onLeaveFeedback.onBad}>
      {options.onBad}
    </StyledButton>
  </ButtonSet>
);

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.object.isRequired,
};
