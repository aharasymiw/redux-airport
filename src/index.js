import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';

/** TODO: import REDUX **/
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Profider, Provider } from 'react-redux';
import logger from 'redux-logger';

/** TODO: Add REDUCERS */
const airlines = (state = [{ name: 'Ryan Air', jetQuantity: 5 }, { name: 'Spirt', jetQuantity: 7 }, { name: 'Sun Country', jetQuantity: 2 }, { name: 'Jet Blue', jetQuantity: 20 }, { name: 'SouthWest', jetQuantity: 9 }], action) => {
    if (action.type === 'ADD_AIRLINE') {
        const name = action.payload.name;
        const jetQuantity = action.payload.jetQuantity;

        // The Vang method:
        return [...state, {name: name, jetQuantity: jetQuantity}];

        // //  1. Make a copy of state.
        // const copyOfState = [..state];
        // // 2. Modify the copy of state.
        // copyOfState.push(airlineName);
        // // 3. Return the modified copy of state.
        // return copyOfState;

    }

    return state;
}

/** TODO: Create store */
const theStore = createStore(
    combineReducers({
        airlines
    }),
    applyMiddleware(
        logger
    )
)


// Be sure to add the Provider! Just wrap App with it. Don't copy and paste from lecture, that will cause issues.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={theStore}>
            <App />
        </Provider>
    </React.StrictMode>
);
