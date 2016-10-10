import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// Child Reducers.
import posts from './posts';
import comments from './comments';

const rootReducer = combineReducers({posts, comments, routing: routerReducer });

export default rootReducer;


// REDUCERS  CHANGES THE STATE
// We create a different reducer file for each state.
// $r will give us the recent tools
// Each time We dispatched the action, All reducers will run, Thats why We use switch cases for reducers.

// .connect will inject the data whereever we are.
