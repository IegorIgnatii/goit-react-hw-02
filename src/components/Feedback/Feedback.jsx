import clsx from "clsx";
import s from "./Feedback.module.css";

const Feedback = ({ reviews, totalFeedback, positiveFeedback }) => {
  return (
    <ul className={clsx(s.list)}>
      {reviews.map(([key, value]) => (
        <li className={clsx(s.listItem)} key={key}>
          {key}: {value}
        </li>
      ))}
      <li className={clsx(s.listItem)}>Total: {totalFeedback}</li>
      <li className={clsx(s.listItem)}>Positive: {positiveFeedback}%</li>
    </ul>
  );
};

export default Feedback;
