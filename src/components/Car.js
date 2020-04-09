import React from 'react'
import cars from '../cars.json'
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    card: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(1),            
        },
    },
}));

export const Car = (props) => {
    const classes = useStyles();
    const id = props.match.params.id;
    const car = cars[id];
    console.log(cars[id]);
    return (
        <div>
            <Container fixed >
                <Paper elevation={3} className={classes.card}>
                    <h1>{car.Name}</h1>
                    <div>
                        {
                            Object.keys(car).map((key, i) => {
                                return <Chip key={i} label={`${key}: ${car[key]}`} />
                            })
                        }
                    </div>
                </Paper>
            </Container>
        </div>
    )
}
