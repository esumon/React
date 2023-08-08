import logo from './logo.svg';
import './App.css';

function App() {
  const person = {
    name: 'Mahafuzur Rahaman',
    job: 'Singer'
  }
  const person2 = {
    name: 'Eva Rahaman',
    title: 'Favorit Singer'
  }
  // const style = {
  //   color: 'red',
  //   backgroundColor: 'black'
  // }
  // 'This is an example of var, let, const CSS rule.'

  const style = {
    first: {
      color: 'yellow',            //This is an example of className CSS rule.
      backgroundColor: 'black'
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit done first time (i do't understand that how it's work, if i close my terminal then it's relode again, another try, realy it's work how fany man, it's easyer my life thank you who create this react core concept ) <code>src/App.js</code> and save to reload with sumon.
        </p>

        {/* <h1 style={{ color: 'red' }}>This is first heading : {person.name + ' ' + person.job}</h1>  'This is an example of an inline CSS rule.' */}

        {/*<h1 style={style}>This is first heading : {person.name + ' ' + person.job}</h1>  'This is an example of var, let, const CSS rule.' */}

        <h1 className='first' style={style.first}>This is first heading : {person.name + ' ' + person.job}</h1>  {/* This is an example of className CSS rule.*/}

        <h1>This is Second heading : {person2.name + ' ' + person2.title}</h1>
        <p>Jsx stands for javascript XML. Jsx allows us to write in javascript.</p>
        <p>My first react Paragraph</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>My Second Paragraph</p>
      </header>
    </div>
  );
}

export default App;
