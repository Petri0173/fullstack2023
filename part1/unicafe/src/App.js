import { useState } from 'react';

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const all = good + neutral + bad;

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={() => setGood(good + 1)}>good</button> &nbsp;
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button> &nbsp;
      <button onClick={() => setBad(bad + 1)}>bad</button>

      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {all}</p>
      <p>average {(good-bad) / all}</p>
      <p>positive {good / all}</p>
    </div>
  )
}

export default App;