import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CourseCatalog from './pages/CourseCatalog';
import ProgressTracker from './components/ProgressTracker';

const App = () => (
  <Router>
    <Switch>
      <Route path="/courses" component={CourseCatalog} />
      <Route path="/progress/:userId/:courseId" component={ProgressTracker} />
    </Switch>
  </Router>
);

export default App;