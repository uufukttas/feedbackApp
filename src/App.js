import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import FeedbackData from './data/FeedbackData'
import About from './pages/About'

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  const deleteFeedback = (id) => {
    if(window.confirm('Are you sure you want to delete this item?')) {
      setFeedback(feedback.filter(item => item.id !== id ));
    }
  };

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    setFeedback([newFeedback, ...feedback]);
  }

  return (
    <Router>
      <Header/>
      <div className='container'>
        <Routes>
          <Route exact path='/' element={
            <>
              <FeedbackForm handleFeedback={addFeedback}/>
              <FeedbackStats feedback={feedback}/>
              <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/>
            </>
          }>
          </Route>
          <Route path='/about' element={<About/>}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App;