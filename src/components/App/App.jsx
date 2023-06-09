// Source in our stylesheet
// 'import is similar to 'require' on the server
import './App.css';

// UseState updated the DOM when a variable changes
import {useState} from 'react';
import CreatureList from '../CreatureList/CreatureList.jsx';
import Header from '../Header/Header.jsx'
import Counter from '../Counter/Counter.jsx'
import InputExample from '../InputExample/InputExample.jsx';

function App () {
  // Our functions and variables will go here
  // This is how we previously declared variables
  // let firstName = 'Sam';
  // let counter = 0;

  // const [myStateVariable, setMyVariable] = useState('initial value');
  // const [firstName, setFirstName] = useState('Sam');
  const [headerText, setHeaderText] = useState('Welcome to React!!!');


  return (
    // This looks like HTML but is really JSX
    <div>
      {/* headerTextProp is the name of our prop, {headerText} is the value we are assigning to the prop */}
      <Header 
        textColor="green" 
        headerText={headerText}
        someOtherThing={'Cake'}
      />
      {/* <p>Hello, {firstName}!</p>
      <Counter/>
      <InputExample /> */}
      <CreatureList/>
     
      {/* <input type= "submit" value="Submit"/> */}

    </div>
  );
}

export default App
