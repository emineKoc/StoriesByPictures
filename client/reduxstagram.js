import React from 'react';

import { render } from 'react-dom';

// Import css
import css from './styles/style.styl';

// Import Components
import Main from './components/Main';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';

// import react router deps
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

const router = (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>

      <IndexRoute component={PhotoGrid}></IndexRoute>
      <Route path="/view/:postId" component={Single}> </Route>

    </Route>
  </Router>
)

render(router, document.getElementById('root'));



//Notes
// We dont need browserHistory when We use redux
// browserHistory allows us to push the state withour changing the actual route.
// IndexRoute home page.

// Instead of using Component state,  We use one giant object -  Redux Stores.
// $r gives all the providers (props, state and so on)
