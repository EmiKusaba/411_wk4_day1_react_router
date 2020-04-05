import React from 'react'
import cars from '../cars.json'
// import material ui components here //
// Container, Paper, Chip //

const Car = (props) => {
    const id = props.match.params.id;
    const car = cars[id];
    console.log(cars[id]);
    return (
        <div>
            <h1>{car.Name}</h1>
            <ul>
                <li>Miles Per Gallon: {car.Miles_per_Gallon}</li>
            </ul>
        </div>
    )
}

export default Car