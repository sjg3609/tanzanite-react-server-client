import {useState, useEffect } from 'react';
// we must import axios in each component we want to use it
import axios from 'axios';
import CreatureForm from './CreatureForm.jsx';
import CreatureItem from './CreatureItem.jsx';

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

    // All components return what you want them to display
    return (
        <div>
            <CreatureForm 
                creatureName={creatureName}
                setCreatureName={setCreatureName}
                creatureOrigin={creatureOrigin}
                setCreatureOrigin={setCreatureOrigin}
                fetchCreatureList={fetchCreatureList}
                />
            <h2>Creature List</h2>
            
            <ul>
                {
                    listOfCreatures.map((creature) => (
                        <CreatureItem 
                            key={creature.id}
                            creature={creature}
                            fetchCreatureList={fetchCreatureList}
                        />
                    ))
                }
            </ul>
        </div>
    );
}

// All components must ecport
export default CreatureList;