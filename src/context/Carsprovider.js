import React, { useState } from 'react';
import Context from './Context';

const Carsprovider = ({children}) => {
    const [cars, setCars] = useState({
        redCar: false,
        blueCar: false,
        yellowCar: false,
    });
    
    const moveCar = (car, side) => {
        setCars({[car]: side});
    };
    const contextInfo = {
        cars,
        moveCar,
    }

    return (
        <Context.Provider value={contextInfo}>
            {children}
        </Context.Provider>
    )
}

export default Carsprovider;