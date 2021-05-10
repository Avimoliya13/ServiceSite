import React, { useState } from "react";

const Event = () =>{
const newBg2 = "black"; 
const newBg1 = "yellow";
const default1 = "red"

    const [bg, setBg] = useState(default1);
    const [text, setText] = useState("Click Me!!!");

    const update1 = () =>{
        setBg(newBg1); 
        setText("Ouchhh 😝");
    }

    const update2 = () =>{
        setBg(newBg2); 
        setText("Haha 🤭");
    }

    return(
      <>
        <div style = {{backgroundColor: bg}}>
            <button onMouseEnter={update1} onMouseLeave={update2}>{text}</button>
        </div>
      </>  
    );
}

export default Event;