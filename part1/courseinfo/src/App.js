const Header = (props) => {

  return (
    <h1>
      {props.name}
    </h1>
  )

}

const Content = (props) => {

  return (
    <>
      <p>
        {props.part1} {props.exercises1}
      </p>

      <p>
        {props.part2} {props.exercises2}
      </p>

      <p>
        {props.part3} {props.exercises3}
      </p>
    </>

  )

}

const Total = (props) => {
  return (
    <p>
      Number of exercises {props.ex1 + props.ex2 + props.ex3}
    </p>
  )

}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header name={course} />

      <Content
        part1={part1} exercises1={exercises1}
        part2={part2} exercises2={exercises2}
        part3={part3} exercises3={exercises3} />

      <Total ex1={exercises1} ex2={exercises2} ex3={exercises3} />
    </div>
  )
}

export default App