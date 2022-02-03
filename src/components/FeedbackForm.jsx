import RatingSelect from "./RatingSelect";
import Card from "./shared/Card";
import Button from "./shared/Button";
import { useState } from "react";

function FeedbackForm() {
  const [text, setText] = useState("");
  const [rating, setRating] = useState(10);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");

  const addReview = (event) => {
    event.preventDefault();
  };

  const handleChange = (event) => {
    if (text === "") {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text !== "" && text.length < 10) {
      setBtnDisabled(true);
      setMessage("Text must be at least 10 charahcters");
    } else {
      setBtnDisabled(false);
      setMessage(null);
    }
    setText(event.target.value);
  };

  return (
    <Card>
      <form onSubmit={addReview}>
        <h2>How would you rate your service with us?</h2>
        <div className="input-group">
          <input
            onChange={handleChange}
            value={text}
            type="text"
            placeholder="Write your review"
          />
          <Button type="submit" isDisabled={btnDisabled} version="primary">
            Send
          </Button>
        </div>
        <RatingSelect select={(rating) => setRating(rating)} />
      </form>

      {message && <div className="message">{message}</div>}
    </Card>
  );
}

export default FeedbackForm;
