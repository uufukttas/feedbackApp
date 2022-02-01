import Card from "./shared/Card";
import { useState } from 'react'

function FeedbackForm() {
    const [text, setText] = useState('');

  const addReview = event => {
    event.preventDefault();
  };
  const handleChange = (event) => {
      setText(event.target.value);
  }

  return (
    <Card>
      <form onSubmit={addReview}>
        <h2>How would you rate your service with us?</h2>
        {/* @todo ratind gomponent*/}
        <div className="input-group">
          <input onChange={handleChange} value={text} type="text" placeholder="Write your review" />
          <button type="submit">Send</button>
        </div>
      </form>
    </Card>
  );
}

export default FeedbackForm;
