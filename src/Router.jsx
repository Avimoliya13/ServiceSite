import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Error from "./Error";
import User from "./User";
import Navbar from "./Navbar";
import Search from "./Search";

const Router = () =>{
    return(
        <>
            <Navbar />
            <Switch>
                <Route exact path='/' component={About}/>
                <Route path='/contact' render={() => <Contact name="Contact" />}/>
                <Route path='/user/:fname/:lname' component={User} />
                <Route exact path='/search' component={Search}/>
                {/* <Route component={Error}/> */}
                <Redirect to="/" />
            </Switch>
            {/* <About />
            <Contact /> */}
        </>
    );
};

export default Router;
