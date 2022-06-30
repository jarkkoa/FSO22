import { useState } from 'react'

const Button = (props) => <button onClick={props.action}>{props.text}</button>

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give feedback</h1>

      <Button text='good' action={() => setGood(good + 1)}></Button>
      <Button text='neutral' action={() => setNeutral(neutral + 1)}></Button>
      <Button text='bad' action={() => setBad(bad + 1)}></Button>

      <h1>Statistics</h1>

      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
    </div>
  )
}

export default App