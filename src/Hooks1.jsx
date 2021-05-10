import React, { useState } from "react";

// const App = () =>{

//     const getTime = new Date().toLocaleTimeString();          //Op bolte const 

//     const [currTime,setCurrTime] = useState(getTime);

//      return(
//         <>
//         <h1>{currTime}</h1>
//         <button onClick={() => setCurrTime(getTime)}>Get Time</button>
//         </>
//     );
// }

// export default App;



const App = () =>{

    let getTime = new Date().toLocaleTimeString();          

    const [currTime,setCurrTime] = useState(getTime);

    const UpdateTime = () =>{
        getTime = new Date().toLocaleTimeString(); 
        setCurrTime(getTime);
    }

    setInterval(UpdateTime,1000);

     return(
        <>
        <h1>{currTime}</h1>
        </>
    );
}

export default App;