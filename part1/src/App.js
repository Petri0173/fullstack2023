const Hello = (props) => {
  console.log(props);
  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>
    </div>
  )
}

const Footer = () => {
  return (
    <div>
      greeting app created by <br />
      <a href="https://github.com/mluukkai">mluukkai</a>
    </div>
  )
}

const App = () => {
  const nimi = 'Miisa';
  const ika = 12;
  return (
  <div>
    <h1>Greetings</h1>
    <Hello name="Petri" age={40 + 10}/>
    <Hello name={nimi} age={ika}/>
    <Footer />
  </div>
  )  
}

export default App;
