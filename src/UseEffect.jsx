import React, { useEffect, useState } from "react";

const App = () =>{
    const [num, setNum] = useState(0);
    const [nums, setNums] = useState(0);
    useEffect(() => {
        //alert("Clicked!!!")
        document.title = `You Clicked me ${nums} times.`   //This line is for Challenge purpose.
    }, [nums])                                     //Array to use alert when which button is clicked.

    return(
        <>
        <button onClick={
            () => {setNum(num+1)}
            //, () => {alert("Clicked!!!")}
            }> Click Me {num} </button>
        <br/>
        <button onClick={
            () => {setNums(nums+1)}
            //, () => {alert("Clicked!!!")}
            }> Click Me {nums} </button>
        </>
    );
}

export default App;