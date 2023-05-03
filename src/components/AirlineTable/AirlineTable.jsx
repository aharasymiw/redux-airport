import { useSelector } from 'react-redux';

import './AirlineTable.css';

function AirlineTable() {
    const airlines = useSelector((store) => store.airlines);
    console.log(airlines)

    return (
        <table>
            <thead>
                <tr><th>Bad Airlines</th></tr>
            </thead>
            <tbody>
                {airlines.map((airline) => { return (<tr key={airline}><td>{airline}</td></tr>) })}</tbody></table>
    )
}

export default AirlineTable;
