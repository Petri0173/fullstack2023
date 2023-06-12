//Tehtävä 1.1 & 1.2 & 1.3 & 1.4

const Header = (props) => {
  return (
  <div>
    <h1>
      {props.course}
    </h1>
  </div>
  )
};

const Parts = (props) => {
  console.log(props)
  return (
    <div>
      <p>
        {props.name} {props.exercises}
      </p>
    </div>
  )
}

const Content = (props) => {
  console.log(props)
  return (
    <div>
      <Parts name={props.parts[0].name} exercises={props.parts[0].exercises} /> 
      <Parts name={props.parts[1].name} exercises={props.parts[1].exercises} /> 
      <Parts name={props.parts[2].name} exercises={props.parts[2].exercises} /> 
    </div>
  )
}

const Total = (props) => {
  console.log(props)
  return (
    <div>
      <p>Courses total {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development';
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },{
      name: 'State of a component',
      exercises: 14
    }
  ]
  
  return (
    <div>
      <Header course={course}/>
      <Content parts={parts}/>
      <Total parts={parts}/>
    </div>
  )
}

export default App