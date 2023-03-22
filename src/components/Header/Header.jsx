import {useState} from  'react';
// Props are passed into our function component as an argument
// const {textColor, headerText, someOtherThing} = props;
function Header({textColor, headerText, someOtherThing}) {

    return (
         <div>
            <header>
            <h1 style={{color: textColor}}>{headerText}</h1>
            <h2>{someOtherThing}</h2>
            </header>
        </div>
        
    );
}

export default Header;