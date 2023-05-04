import { useSelector } from 'react-redux';

import './AirlineTable.css';

function AirlineTable() {
    const airlines = useSelector((store) => store.airlines);
    console.log(airlines)

    return (
        <table>
            <thead>
                <tr>
                    <th>Bad Airlines</th>
                    <th>Bad Jets</th>
                </tr>
            </thead>
            <tbody>
                {airlines.map((airline) => {
                    return (
                        <tr key={airline.name}>
                            <td>{airline.name}</td>
                            <td>{airline.jetQuantity}</td>
                        </tr>
                    )
                })
                }
            </tbody>
        </table>
    )
}

export default AirlineTable;
