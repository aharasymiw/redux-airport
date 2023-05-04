import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

function AirlineForm() {
    const [name, setname] = useState('');
    const [jetQuantity, setjetQuantity] = useState('');

    const dispatch = useDispatch();

    const addAirline = (event) => {
        event.preventDefault();

        // Send a dispatch to Redux-land.  It will need to include
        // the value of airLineInput as the payload.
        dispatch({
            type: 'ADD_AIRLINE',
            payload: { name: name, jetQuantity: jetQuantity }
        });
        setname('');
        setjetQuantity('');
    }

    return (
        <form onSubmit={addAirline}>
            <input
                placeholder='Airline Name'
                value={name}
                onChange={(event => setname(event.target.value))}
            />
            <input
                placeholder='Jet Count'
                value={jetQuantity}
                onChange={(event => setjetQuantity(event.target.value))}
            />

            <button>Add Airline</button>
        </form>)
}

export default AirlineForm;
