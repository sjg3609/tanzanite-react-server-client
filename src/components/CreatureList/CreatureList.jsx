import {useState, useEffect } from 'react';
// we must import axios in each component we want to use it
import axios from 'axios';


function CreatureList() {
    const [listOfCreatures, setListOfCreatures] = useState([
        // {
        //     id: '0',
        //     name: 'Unicorn',
        //     origin: 'Norway'
        // }
    ]);

    const fetchCreatureList = () => {
        axios.get('/creature').then((response) => {
            // Update the array. React does the rest
            setListOfCreatures(response.data);
        }).catch((error) => {
            console.log(`Error in GET ${error}`);
            alert('Something went wrong!');
        })
    }

    useEffect(() => {
        // at this point React is ready
        fetchCreatureList();
    }, []); // ! Remember an empty array at the end

    // All components return what you want them to display
    return (
        <div>
            <h2>Creature List</h2>
            <ul>
                {
                    listOfCreatures.map((creature) => (
                        // what we want to render
                        <li key={creature.id}>{creature.name} from {creature.origin}</li>
                    ))
                }
            </ul>
        </div>
    );
}

// All components must ecport
export default CreatureList;