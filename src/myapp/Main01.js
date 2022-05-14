import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Navigation from "../components/Navigation";
import About from "../routes/About";
import Detail from "../routes/Detail";
import Home from "../routes/Home";


function Main01() {
    return (
        <HashRouter>
            <Navigation />
            <Route path = "/" component={Home} exact = {true} />
            <Route path = "/about" component = {About} />
            <Route path = "/newb-detail" component = {Detail} />
        </HashRouter>
    );
        
    
}

export default Main01;