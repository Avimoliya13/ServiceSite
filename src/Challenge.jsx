import React, { useState } from "react";

const Challenge = () =>{

    const [fullName, setFullName] = useState({
        fname: "",
        lname: "",
        email: "",
        number: "",
    });

    const inputEvent = (event) =>{
        console.log(event.target.value);
        console.log(event.target.name);

        // const value = event.target.value;
        // const name  = event.target.name;

        const {value, name} = event.target;     //Array destruction ES-6

        setFullName((preValue) =>{
            return{
                ...preValue,
                [name] : value,
            }



            // if(name === "fName"){
            //     return{
            //         fname: value,
            //         lname: preValue.lname,
            //         email: preValue.email,
            //         number: preValue.number,
            //     };
            // }else   if(name === "lName"){
            //     return{
            //         fname: preValue.fname,
            //         lname: value,
            //         email: preValue.email,
            //         number: preValue.number,
            //     };
            // }else   if(name === "email"){
            //     return{
            //         fname: preValue.fname,
            //         lname: preValue.lname,
            //         email: value,
            //         number: preValue.number,
            //     };
            // }else   if(name === "number"){
            //     return{
            //         fname: preValue.fname,
            //         lname: preValue.lname,
            //         email: preValue.email,
            //         number: value,
            //     };
            // }
        });
    };

    const onSubmit = (event) =>{
        event.preventDefault();   //To prevent from default refreshing while submitting
        alert("Form submitted");          
    }

    return(
        <>
            <form onSubmit={onSubmit}>
                <div>
                    <h1>Hello!!!{fullName.fname}{fullName.lname}</h1>

                    <p>{fullName.email}</p>

                    <p>{fullName.number}</p>

                    <input type="text" placeholder="First Name" name="fname" onChange={inputEvent} value={fullName.fname} />
                    <br />

                    <input type="text" placeholder="Last Name" name="lname" onChange={inputEvent}  value={fullName.lname}/>
                    <br />

                    <input type="emai" placeholder="Email Id" name="email" onChange={inputEvent}  value={fullName.email}/>
                    <br />

                    <input type="number" placeholder="Phone Number" name="number" onChange={inputEvent}  value={fullName.number}/>
                    <br />

                    <button type="submit">Click Me!!</button>
                </div>
            </form>
        </>

    );
}

export default Challenge;