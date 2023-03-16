import {useState} from 'react';

function InputExample() {
    const [firstName, setFirstName] = useState('Sam');
    return (
        <>
            <h2>Input Example:</h2>
            <p>You have typed: {firstName}</p>
            <input value={firstName} onChange={(e) => setFirstName(e.target.value)} type="text" />
        </>
    );
}

export default InputExample;