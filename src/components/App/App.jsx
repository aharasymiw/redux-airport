import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import AirlineTable from '../AirlineTable/AirlineTable.jsx'
function App() {
  const [airlineInput, setAirlineInput] = useState('');

  const dispatch = useDispatch();

  const addAirline = (event) => {
    event.preventDefault();

    // Send a dispatch to Redux-land.  It will need to include
    // the value of airLineInput as the payload.
    dispatch({
      type: 'ADD_AIRLINE',
      payload: airlineInput
    });
    setAirlineInput('');
  }

  return (
    <div>
      <h1>Redux Airport</h1>
      <form onSubmit={addAirline}>
        <input
          placeholder='Airline Name'
          value={airlineInput}
          onChange={(event => setAirlineInput(event.target.value))}
        />
        <button>Add Airline</button>
      </form>
      <br />
      <br />
      <AirlineTable />
    </div>
  );
}

export default App;
