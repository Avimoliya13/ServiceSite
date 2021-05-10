import React, { useState } from "react";

// const ControlledComponents = () => {

//     const [name, setName] = useState();
//     const [fullName, setFullname] = useState();

//     const inputName = (event) =>{
//         setName(event.target.value);
//     }

//     const onSubmit = () =>{
//         setFullname(name);
//     }

//     return(
//         <>
//                 <div>
//                     <h1>Hello!!! {fullName}</h1>
//                     <input type="text" placeholder="Enter Your Name"  onChange={inputName}/>
//                     <button onSubmit={onSubmit} >Click Me!!</button>
//                 </div>
//         </>
//     );
// }

// export default ControlledComponents;

const ControlledComponents = () => {

    const [name, setName] = useState();
    const [firstName, setFirstname] = useState();

    const [Lastname, setLastName] = useState();
    const [lastNameNew, setLastNameNew] = useState();

    const onSubmit = (event) =>{
        event.preventDefault();            //To prevent from default refreshing while submitting 
        setFirstname(name);
        setLastNameNew(Lastname);
    }

    const inputName = (event) =>{
        setName(event.target.value);
    }

    const inputLastName = (event) =>{
        setLastName(event.target.value);
    }

    return(
        <>
            <form onSubmit={onSubmit}>
                <div>
                    <h1>Hello!!! {firstName} {lastNameNew}</h1>
                    <input type="text" placeholder="Enter Your First Name"  onChange={inputName} value={name}/>
                    <br />
                    <input type="text" placeholder="Enter Your Last Name"  onChange={inputLastName} value={Lastname}/>
                    <button type="submit">Click Me!!</button>
                </div>
            </form>
        </>
    );
}

export default ControlledComponents;