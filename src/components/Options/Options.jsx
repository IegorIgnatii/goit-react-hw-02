import clsx from "clsx";
import s from "./Options.module.css";

const Options = ({ reviews, handleClick, totalFeedback, handleReset }) => {
  return (
    <ul className={clsx(s.list)}>
      {reviews.map((review) => (
        <li key={review}>
          <button
            className={clsx(s.button)}
            onClick={() => handleClick(review)}
          >
            {review}
          </button>
        </li>
      ))}
      {totalFeedback !== 0 && (
        <li>
          <button className={clsx(s.button)} onClick={handleReset}>
            Reset
          </button>
        </li>
      )}
    </ul>
  );
};

export default Options;
