import axios from 'axios';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';


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
        <Grid item xs={12} md={4}>
            <Box component="form" >
                <Stack direction="row" spacing={2}>
                <TextField label="Name" size="large" value={creatureName} onChange={(e) => setCreatureName(e.target.value)} />
                <br/>
                <TextField label="Origin" size="large" value={creatureOrigin} onChange={(e) => setCreatureOrigin(e.target.value)} />
                <br/>
                <Button variant="outlined" size="large" value="Submit" onClick={submitForm}>Submit</Button>
                </Stack>
            </Box>
        </Grid>
    )
}

export default CreatureForm;