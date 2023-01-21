import s from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options }) => {
  return (
    <ul className={s.listBtn}>
      <li>
        <button className={s.btn} type="button" name="good" onClick={options}>
          Good
        </button>
      </li>
      <li>
        <button
          className={s.btn}
          type="button"
          name="neutral"
          onClick={options}
        >
          Neutral
        </button>
      </li>
      <li>
        <button className={s.btn} type="button" name="bad" onClick={options}>
          Bad
        </button>
      </li>
    </ul>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.func.isRequired,
};
