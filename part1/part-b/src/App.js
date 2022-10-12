const Header = (props) => {
  return(
    <h1>{props.course}</h1>
  )
}

const Content = (props) => {
  return(
    <p>{props.part} {props.number}</p>
  )
}

const Total = (props) => {
 return(
  <p>Total number of exercises: {props.number}</p>
 )
}

const App = () => {
  const course = { 
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  };

  return (
    <div>
      <Header course={course.name} />
      <Content part={course.parts[0].name} number={course.parts[0].exercises} />
      <Content part={course.parts[1].name} number={course.parts[1].exercises} />
      <Content part={course.parts[2].name} number={course.parts[2].exercises} />
      <Total number={course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises} />
    </div>
  )
}

export default App