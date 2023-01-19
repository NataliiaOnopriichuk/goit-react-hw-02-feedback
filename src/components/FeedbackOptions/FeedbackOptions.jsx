// блок кнопок
export const FeedbackOptions = ({ options }) => {
  const { bad, good, neutral } = options;
  return (
    <>
      <button type="button" onClick={good}>
        Good
      </button>
      <button type="button" onClick={neutral}>
        Neutral
      </button>
      <button type="button" onClick={bad}>
        Bad
      </button>
    </>
  );
};
