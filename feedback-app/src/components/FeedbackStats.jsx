import PropTypes from "prop-types";

function FeedbackStats({ feedback }) {
  // Calculate ratings avg
  if (!feedback) {
    return (
      <div className="feedback-stats">
        <h4>No Reviews</h4>
        <h4>Average Rating: 0</h4>
      </div>
    );
  } else {
    let average =
      feedback.reduce((acc, cur) => {
        return acc + cur.rating;
      }, 0) / feedback.length;

    return (
      <div className="feedback-stats">
        <h4>{feedback.length} Reviews</h4>
        <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
      </div>
    );
  }

  // average = average.toFixed(1).replace(/[.,]0$/, "");
}

// FeedbackStats.propTypes = {
//   feedback: PropTypes.array.isRequired,
// };

export default FeedbackStats;
