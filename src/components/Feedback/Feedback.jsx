import s from "./Feedback.module.css";
const Feedback = ({ count, totalFeedback, positivePart }) => {
  return (
    <ul className={s.feedback}>
      {Object.entries(count).map(([key, value]) => (
        <li key={key}>
          {key} : {value}
        </li>
      ))}
      <li>Total: {totalFeedback}</li>
      <li>Positive: {positivePart}%</li>
    </ul>
  );
};
export default Feedback;
