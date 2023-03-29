import axios from 'axios';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';


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

    const addSighting = (e) => {
        console.log(`addSighting ${creature.id}`);
        axios.put(`/creature/sightings/${creature.id}`).then((response) => {
            console.log(response);
            fetchCreatureList();
        }).catch((error) => {
            console.log(`Error in addSighting ${error}`);
            alert('Something went wrong in addSighting!');
        });
    }

    return (
        <Grid item xs={12} md={4} >
            {/* // what we want to render */}
            <Card sx={{minWidth: 275}} style={{textDecoration: getDecoration() }}>
                <CardContent>
                    <Typography variant="h5">
                        {creature.name}
                    </Typography>
                    <Typography>
                        Origin: {creature.origin}
                    </Typography>
                </CardContent>
                 <CardActions>
                    <Button variant="outlined" color="error" onClick={(e) => removeCreature(e)}>Delete</Button>
                    <br/>
                    Sightings: {creature.sightings}<Button variant="outlined" onClick={(e) => addSighting(e)}>Add Sighting</Button>
                 </CardActions>
            </Card>
        </Grid>
    );

}

export default CreatureItem;