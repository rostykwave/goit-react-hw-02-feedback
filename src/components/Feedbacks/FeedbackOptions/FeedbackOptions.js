import s from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div className={s['button-set']}>
    <button type="button" onClick={onLeaveFeedback.onGood}>
      {options.onGood}
    </button>
    <button type="button" onClick={onLeaveFeedback.onNeutral}>
      {options.onNeutral}
    </button>
    <button type="button" onClick={onLeaveFeedback.onBad}>
      {options.onBad}
    </button>
  </div>
);

export default FeedbackOptions;
