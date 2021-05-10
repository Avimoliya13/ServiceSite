import React, { useState } from "react";

const HandellingInput = () =>{

    const [fullName, setFullName] = useState({
        fname: "",
        lname: "",
    });

    const inputEvent = (event) =>{
        console.log(event.target.value);
        console.log(event.target.name);

        const value = event.target.value;
        const name  = event.target.name;

        setFullName((preValue) =>{
            if(name === "fName"){
                return{
                    fname: value,
                    lname: preValue.lname,
                };
            }else   if(name === "lName"){
                return{
                    fname: preValue.fname,
                    lname: value,
                };
            }
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
                    <input type="text" placeholder="Enter Your First Name" name="fName" onChange={inputEvent} value={fullName.fname} />
                    <br />
                    <input type="text" placeholder="Enter Your Last Name" name="lName" onChange={inputEvent}  value={fullName.lname}/>
                    <button type="submit">Click Me!!</button>
                </div>
            </form>
        </>

    );
}

export default HandellingInput;