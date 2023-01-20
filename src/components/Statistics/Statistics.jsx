import { Notification } from '../Notification/Notification';

export const Statistics = ({
  good,
  neutral,
  bad,
  total = 0,
  positivePercentage = 100,
}) => {
  return total >= 1 ? (
    <>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive: {positivePercentage}%</p>
    </>
  ) : (
    <Notification message="There is no feedback" />
  );
};
