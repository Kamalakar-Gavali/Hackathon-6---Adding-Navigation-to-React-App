import React, {Component, useState} from "react";
import ReactDOM from 'react-dom'
import {BrowserRouter,Link,Route,Switch,useLocation} from 'react-router-dom';
import Home from './Home';
import About from './About';

import Error from './Error';
import '../styles/App.css';

class App extends Component {

    constructor(props)
    {
        super(props);
        
    }
    render() {

        return(
            
            <div id="main">
               {/* Do not remove the main div */}
               
               <BrowserRouter>   
               <a><Link to='/'>Home</Link></a>
               <a><Link to="/about">About</Link></a>
               <LocationDisplay/>
               <Switch>
                    <Route exact path="/" component={Home}> 
                    </Route>
                   <Route exact path='/about' component={About}>                      
                   </Route>
                   <Route component={Error}>
                    </Route>
               
            </Switch>
               

            </BrowserRouter>   
            </div>
            
        )
    }
}

export const LocationDisplay  =()=>
{
    let x=useLocation()
    console.log(x.pathname);
    return(
        <p data-testid="location-display">{x.pathname}</p>
    )
}
export default App;
