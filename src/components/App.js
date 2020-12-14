import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './Home';
import Home2 from './Home2';
import NoMatch from './NoMatch';

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home2" component={Home2} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;