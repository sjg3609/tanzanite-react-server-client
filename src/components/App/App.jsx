// Source in our stylesheet
// 'import is similar to 'require' on the server
import './App.css';

// UseState updated the DOM when a variable changes
import {useState} from 'react';
import CreatureList from '../CreatureList/CreatureList.jsx';

function App () {
  // Our functions and variables will go here
  // This is how we previously declared variables
  // let firstName = 'Sam';
  const [firstName, setFirstName] = useState('Sam');
  // let counter = 0;

  // const [myStateVariable, setMyVariable] = useState('initial value');

  //     name     function               default value
  const [counter, setCounter] = useState(0);
  // function to increase click counter
  let increaseClickCounter = () => {
    // counter +=1; Do not modify state directly!
    setCounter(counter + 1);
    console.log(counter);
  }

  let decreaseClickCounter = () => {
    setCounter(counter - 1);
    console.log(counter);
  }

  return (
    // This looks like HTML but is really JSX
    <div>
      <header>
        <h1>Welcome to React!</h1>
      </header>
      <p>Hello {firstName}!</p>
      <p>You clicked {counter} times!</p>
      <button onClick={increaseClickCounter}>Increase</button>
      <button onClick={decreaseClickCounter}>Decrease</button>

      <CreatureList/>
     
      {/* <input type= "submit" value="Submit"/> */}

    </div>
  );
}

export default App
