//Tehtävä 1.1 & 1.2

const Header = (props) => {
  return (
  <div>
    <h1>
      {props.course}
    </h1>
  </div>
  )
};

const Part = (props) => {
  return (
    <div>
      <p>
        {props.part} {props.exercises}
      </p>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.parts[0].courseName} exercises={props.parts[0].exercises}/>
      <Part part={props.parts[1].courseName} exercises={props.parts[1].exercises}/>
      <Part part={props.parts[2].courseName} exercises={props.parts[2].exercises}/>
    </div>
  )
}

const Total = (props) => {
  return (
    <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
  )
}

const App = () => {
  const course = {
    courseName: 'Half Stack application development',
    parts: [
      {
        courseName: 'Fundamentals of React',
        exercises: 10
      },
      {
        courseName: 'Using props to pass data',
        exercises: 7
      },
      {
        courseName: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.courseName} />
      <Content parts={course.parts}/>
      <Total parts={course.parts} />
    </div>
  )
}

export default App