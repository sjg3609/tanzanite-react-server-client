import axios from 'axios';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Rating from '@mui/material/Rating';
import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';


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

    // const [value, setValue] = React.useState<number | null>(2);

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
                     <Rating 
                        // value={value}
                        // onChange={(event, newValue) => {
                        // setValue(newValue);
                        // }}
                    />
                </CardContent>
                 <CardActions>
                    {/* <Stack direction="row" spacing={4}> */}
                        <IconButton aria-label="delete" variant="outlined" color="error" onClick={(e) => removeCreature(e)}>
                            <DeleteIcon />
                        </IconButton>
                        <br/>
                        <IconButton variant="outlined" onClick={(e) => addSighting(e)}>
                            <VisibilityIcon />
                        </IconButton> {creature.sightings}
                       
                    {/* </Stack> */}
                    
                 </CardActions>
            </Card>
        </Grid>
    );

}

export default CreatureItem;