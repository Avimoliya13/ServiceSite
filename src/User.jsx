import React from "react";
import { useParams, useLocation, useHistory } from "react-router-dom";      // useParams Hook concept

// const User = ({ match }) =>{
//     return <h1>This is {match.params.fname} page.</h1>
// };

const User = () =>{
    const { fname, lname } = useParams();
    const loc = useLocation();
    const history = useHistory();
    console.log(history);
    return (
    <>
        <h1>This is {fname} {lname} page.</h1>
        <p>Current path is {loc.pathname}</p>
        {loc.pathname ===  `/user/avi/moliya` ? (<button onClick={() => history.push('/contact')}>Click Me!!</button>) : null}
    </>
    )
};

export default User;