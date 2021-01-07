
import React from "react";

import Extra from './Main/extra';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';



const App = () => {


  return (
    <Router>
    
    
     
        <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/extra' component={Extra} />
        </Switch>
          
         
        
     
    

  
    </Router>
    

    
  );
};

export default App;