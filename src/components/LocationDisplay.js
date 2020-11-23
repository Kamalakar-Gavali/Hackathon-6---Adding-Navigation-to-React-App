import React, {Component, useState} from "react";
import { useLocation } from "react-router-dom";
import ReactDOM from 'react-dom'
const LocationDisplay  =()=>
{
    let x=useLocation()
    console.log(x.pathname);
    return(
        <p data-testid="location-display">{x.pathname}</p>
    )
}
export default LocationDisplay;