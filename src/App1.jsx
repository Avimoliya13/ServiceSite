import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home1 from "./Home1";
import About1 from "./About1";
import Service1 from "./Service1";
import Contact1 from "./Contact1";
import Navbar1 from "./Navbar1";
import Footer from "./Footer";
import { Switch, Route, Redirect} from "react-router-dom"; 

const App1 = () =>{
    return(
        <>
            <Navbar1 />
            <Switch>
                <Route exact path="/" component={Home1} />
                <Route exact path="/about" component={About1} />
                <Route exact path="/service" component={Service1} />
                <Route exact path="/contact" component={Contact1} />
                <Redirect to="/" />
            </Switch>
            <Footer />
        </>
    );
};

export default App1;