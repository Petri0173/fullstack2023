import { useState } from 'react';

const Statistics = ( props ) => {
  return (
    <div>
      <p> {props.text} {props.all}</p> 
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState([]);
  const average = (good-bad) / all;
  const positive = (good / all * 100) + '%' ;

  const handleGoodClick = () => {
    setGood(good+1);
    const upDatedGood = good + 1;
    setGood(upDatedGood);
    setAll(upDatedGood + neutral + bad);
  }

  const handleNeutralClick = () => {
    setNeutral(neutral+1);
    const upDatedNeutral = neutral + 1;
    setNeutral(upDatedNeutral);
    setAll(good + upDatedNeutral + bad);
  }
  
  const handleBadClick = () => {
    setBad(bad+1);
    const upDatedBad = bad + 1;
    setBad(upDatedBad);
    setAll(good + neutral + upDatedBad);
  }

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={handleGoodClick}>good</button> &nbsp;
      <button onClick={handleNeutralClick}>neutral</button> &nbsp;
      <button onClick={handleBadClick}>bad</button>

      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>

      <Statistics all={all} text='all'/>
      <Statistics all={average} text='average'/>
      <Statistics all={positive}  text='positive'/>
    </div>
  )
}
export default App;