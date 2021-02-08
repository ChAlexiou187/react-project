import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Dashboard, Course, Courses, AddCourse } from './views';


const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route exact path="/courses" component={Courses} />
      <Route exact path="/course/:id" component={Course} />
      <Route exact path="/add-course" component={AddCourse} />
    </Switch>
  </Router>
);


export default App;
