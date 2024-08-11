import s from "./Options.module.css";

const Options = ({ count, updateFeedback, totalFeedback, resetCount }) => {
  return (
    <ul className={s.options}>
      {Object.keys(count).map((item) => (
        <li key={item}>
          <button
            className={s.button}
            type="button"
            onClick={() => updateFeedback(item)}
          >
            {item}
          </button>
        </li>
      ))}
      {totalFeedback > 0 ? (
        <li>
          <button className={s.button} type="button" onClick={resetCount}>
            reset
          </button>
        </li>
      ) : (
        ""
      )}
    </ul>
  );
};

export default Options;
