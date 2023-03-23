import axios from 'axios';

function CreatureItem( {creature, fetchCreatureList} ) {

    // Same pattern can be used for Update (marking something complete)
    const removeCreature =(e) => {
        console.log(`removeCreature ${creature.id}`);
        axios.delete(`/creature/${creature.id}`).then((response) => {
            // fetch the CreatureList
            fetchCreatureList();
        }).catch((error) => {
            console.log(`Error in removeCreature ${error}`);
            alert('Something went wrong in removeCreature!');
        })
    }

    // this is much easier after creating a CreatureItem Component
    const getDecoration = () => {
        if(creature.name === 'Megatron') {
            return 'line-through';
        } else {
            return 'none';
        }
    }

    return (
        <>
            {/* // what we want to render */}
            <li style={{textDecoration: getDecoration() }}>{creature.name} from {creature.origin}
            <button onClick={(e) => removeCreature(e)}>Delete</button>
            </li>
            
        </>
    );

}

export default CreatureItem;