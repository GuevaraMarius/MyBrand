import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import {LandingPage} from './components/LandingPage'
import {Contact} from './components/Contact'
import {Blog} from './components/blog/Blog'


function App() {
  return (
    <Router>
      <Switch>
       <Route path="/" exact component={LandingPage} />
       <Route path="/home" exact component={LandingPage} />
       <Route path="/contact" exact component={Contact} />
       <Route path="/blog" exact component={Blog} />
       </Switch>
      </Router>
      
  );
}

export default App;
