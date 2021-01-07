
import React from "react";

// import Extra from './Main/praisePage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Highfive from './Main/Highfivepage';
import Praise from './Main/praisePage';



const App = () => {


  return (
    <Router>
    
    
     
        <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/praise' component={Praise} />
        <Route exact path='/highfive' component={Highfive} />
        </Switch>
         
  
    </Router>
    

    
  );
};

export default App;
