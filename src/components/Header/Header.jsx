import {useState} from  'react';

function getHeader() {
    const [firstName, setFirstName] = useState('Sam');
    return (
         <div>
            <header>
            <h1>Welcome to React, Sam!</h1>
            </header>
       
            <p>Hello {firstName}!</p>
        </div>
        
    );
}

export default getHeader;