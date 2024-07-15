import s from './Feedback.module.css'


const Feedback = ({ good, neutral, bad, total, positive }) => {
  return (
    <div className={s.place}>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive: {positive}%</p>
    </div>
  );
};

export default Feedback;