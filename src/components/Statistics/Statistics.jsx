// відображення статистики
export const Statistics = ({ good, neutral, bad, total }) => {
  console.log(total);
  return (
    <>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      {/* <p>Total: {total}</p> */}
    </>
  );
};
