import {useState} from 'react';

function counterElement() {
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
        <div>
            <p>You clicked {counter} times!</p>
            <button onClick={increaseClickCounter}>Increase</button>
            <button onClick={decreaseClickCounter}>Decrease</button>
        </div>
    );
}

export default counterElement;