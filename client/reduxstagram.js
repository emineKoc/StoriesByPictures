import React from 'react';

import { render } from 'react-dom';

// Import css
import css from './styles/style.styl';

// Import Components
import App from './components/App';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';

// import react router deps
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

// We are importing these 2 lines, and We modify router. We add Provider tag
import { Provider } from 'react-redux';
import store, { history } from './store'


const router = (
  <Provider store={store}>
  <Router history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={PhotoGrid}></IndexRoute>
      <Route path="/view/:postId" component={Single}> </Route>
    </Route>
  </Router>
  </Provider>

)

render(router, document.getElementById('root'));



//Notes
// We dont need browserHistory when We use redux
// browserHistory allows us to push the state withour changing the actual route.
// IndexRoute home page.

// Instead of using Component state,  We use one giant object -  Redux Stores.
// $r gives all the providers (props, state and so on)
// Provider has dispatch, getState, replaceReducers and so on...
// everytime you dispatch a reducer, every reducers ll run thats why We use switch cases.
