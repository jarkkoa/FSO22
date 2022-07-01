import { useState } from 'react'

const Button = (props) => {
  return <button onClick={props.action}>{props.text}</button>
}

const StatisticsLine = ({ text, value, unit }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value} {unit}</td>
    </tr>
  )
}

const Statistics = ({ good, neutral, bad, all, avg, pos }) => {

  if (good === 0 && neutral === 0 && bad === 0) {
    return (
      <div>
        <h1>Statistics</h1>
        <p>No feedback given</p>
      </div>
    )
  }

  else {
    return (
      <div>
        <h1>Statistics</h1>

        <table>

          <tbody>
            <StatisticsLine text='good' value={good} />
            <StatisticsLine text='neutral' value={neutral} />
            <StatisticsLine text='bad' value={bad} />
            <StatisticsLine text='all' value={all} />
            <StatisticsLine text='average' value={avg} />
            <StatisticsLine text='positive' value={pos * 100} unit={'%'} />

          </tbody>

        </table>
      </div>
    )
  }
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const [avg, setAvg] = useState(0)
  const [pos, setPos] = useState(0)
  const [all, setAll] = useState(0)

  const handleGoodClick = () => {

    const newGood = good + 1;

    setGood(newGood);
    setAll(newGood + neutral + bad);
    setPos((newGood) / (newGood + neutral + bad));
    setAvg((newGood - bad) / (newGood + neutral + bad));
  }

  const handleNeutralClick = () => {

    const newNeutral = neutral + 1;

    setNeutral(newNeutral);
    setAll(good + newNeutral + bad);
    setPos((good) / (good + newNeutral + bad));
    setAvg((good - bad) / (good + newNeutral + bad));
  }

  const handleBadClick = () => {

    const newBad = bad + 1;

    setBad(newBad);
    setAll(good + neutral + newBad);
    setPos((good) / (good + neutral + newBad));
    setAvg((good - newBad) / (good + neutral + newBad));
  }

  return (
    <div>
      <h1>Give feedback</h1>

      <Button text='good' action={handleGoodClick}></Button>
      <Button text='neutral' action={handleNeutralClick}></Button>
      <Button text='bad' action={handleBadClick}></Button>

      <Statistics good={good} neutral={neutral} bad={bad} avg={avg} pos={pos} all={all} />

    </div>
  )
}

export default App