import {useState, useEffect } from 'react';
// we must import axios in each component we want to use it
import axios from 'axios';


function CreatureList() {
    const [creatureName, setCreatureName] = useState('');
    const [creatureOrigin, setCreatureOrigin] = useState('');
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

    const submitForm = (e) => {
        e.preventDefault();
        axios.post('/creature', {
            name: creatureName,
            origin: creatureOrigin,
        }).then((response) => {
            setCreatureName('');
            setCreatureOrigin('');
            fetchCreatureList();
        }).catch((error) => {
            console.log(`Error in POST ${error}`);
            alert('Something went wrong.');
        })
    }

    // All components return what you want them to display
    return (
        <div>
            <h2>Creature List</h2>
            <form onSubmit={submitForm}>
                Name: <input type="text" value={creatureName} onChange={(e) => setCreatureName(e.target.value)} />
                <br/>
                Origin: <input type="text" value={creatureOrigin} onChange={(e) => setCreatureOrigin(e.target.value)} />
                <input type="submit" value="submit" />
            </form>
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