import axios from 'axios';

function CreatureForm( {creatureName, setCreatureName, creatureOrigin, setCreatureOrigin, fetchCreatureList} ) {
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
            alert('Something went wrong in POST');
        })
    }
    return (
        <>
        <form onSubmit={submitForm}>
                Name: <input type="text" value={creatureName} onChange={(e) => setCreatureName(e.target.value)} />
                <br/>
                Origin: <input type="text" value={creatureOrigin} onChange={(e) => setCreatureOrigin(e.target.value)} />
                <br/>
                <input type="submit" value="Submit" />
            </form>
        </>
    )
}

export default CreatureForm;