import React, {Component, useState} from "react";
import ReactDOM from 'react-dom'
import {BrowserRouter,Link,Route,Switch,useLocation} from 'react-router-dom';
import Home from './Home';
import About from './About';
import LocationDisplay from './LocationDisplay';
import Error from './Error';
import '../styles/App.css';

class App extends Component {

    constructor(props)
    {
        super(props);
        
    }
    render() {

        return(
            <BrowserRouter>
            <div id="main">
               {/* Do not remove the main div */}
               
               
               <a><Link to='/'>Home</Link></a>
               <a><Link to="/about">About</Link></a>
                 
               <Switch>
                    <Route exact path="/" component={Home}> 
                    </Route>
                   <Route exact path='/about' component={About}>                      
                   </Route>
                   <Route path="*" component={Error}>
                    </Route>
               
            </Switch>
               

               
            </div>
            </BrowserRouter>
        )
    }
}


export default App;
