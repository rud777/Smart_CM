import {createLogic} from "redux-logic";
const {ADD_USER_FAIL, ADD_USER_REQUEST, ADD_USER_SUCCESS} = require("../actions/index");
import axios from "axios";

 export const fetchPollsLogic = createLogic({
    // declarative built-in functionality wraps your code
    type: ADD_USER_REQUEST, // only apply this logic to this type
    latest: true, // only take latest

    // your code here, hook into one or more of these execution
    // phases: validate, transform, and/or process
    process({ getState, action }, dispatch, done) {
        axios
            .get('https://survey.codewinds.com/polls')
            .then((resp) => resp.data)
            .then((polls) => dispatch({ type: ADD_USER_SUCCESS, payload: polls }))
            .catch((err) => {
                console.error(err); // log since could be render err
                dispatch({ type: ADD_USER_FAIL, payload: err, error: true });
            })
            .then(() => done()); // call done when finished dispatching
    }
});
