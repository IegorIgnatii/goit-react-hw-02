import { useEffect, useState } from "react";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";

function App() {
  const REVIEWS_KEY = "reviews_key";
  const [reviews, setReviews] = useState(() => {
    const reviewsState = window.localStorage.getItem(REVIEWS_KEY);

    if (reviewsState !== null) {
      return JSON.parse(reviewsState);
    }

    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });
  const totalFeedback = Object.values(reviews).reduce(
    (acc, value) => acc + value,
    0
  );
  const positiveFeedback = totalFeedback
    ? Math.round((reviews.good / totalFeedback) * 100)
    : 0;

  const updateFeedback = (feedbackType) => {
    setReviews((prev) => ({ ...prev, [feedbackType]: prev[feedbackType] + 1 }));
  };

  const resetReviews = () => {
    setReviews({ good: 0, neutral: 0, bad: 0 });
  };

  useEffect(() => {
    window.localStorage.setItem(REVIEWS_KEY, JSON.stringify(reviews));
  }, [reviews]);

  return (
    <>
      <Description />
      <Options
        reviews={Object.keys(reviews)}
        handleClick={updateFeedback}
        totalFeedback={totalFeedback}
        handleReset={resetReviews}
      />
      {totalFeedback === 0 ? (
        <Notification />
      ) : (
        <Feedback
          reviews={Object.entries(reviews)}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      )}
    </>
  );
}

export default App;
