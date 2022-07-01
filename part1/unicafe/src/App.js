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

  const [anecIndex, setAnecdote] = useState(0)
  
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]
  
  const [anecPoints, setAnecpoint] = useState(new Array(anecdotes.length).fill(0));
  
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

  const voteAnecdote = () => {
    var copy = [...anecPoints]
    copy[anecIndex] += 1
    setAnecpoint(copy)
  }

  return (
    <div>
      <h1>Give feedback</h1>

      <Button text='good' action={handleGoodClick}></Button>
      <Button text='neutral' action={handleNeutralClick}></Button>
      <Button text='bad' action={handleBadClick}></Button>

      <Statistics good={good} neutral={neutral} bad={bad} avg={avg} pos={pos} all={all} />

      <h1>Anecdotes</h1>
      <p>{anecdotes[anecIndex]}</p>
      <p>This anecdote's score: {anecPoints[anecIndex]}</p>
      <Button text='Next anecdote' action={() => setAnecdote(Math.floor(Math.random() * anecdotes.length))}></Button>
      <Button text='Vote up' action={voteAnecdote} />

    </div>
  )
}

export default App