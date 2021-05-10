import React from "react";

const SlotM = (props) =>{
    // let x = '😄';
    // let y = '😄';
    // let z = '👍';

    if((props.x===props.y) && (props.y===props.z)){
        return(
            <>
                <div className="slot-inner">
                    <h1>{props.x} {props.y} {props.z}</h1>
                    <h1>This matched.</h1>
                    <hr/>
                </div>
            </>
        );
    }
    else{
        return(
            <>
                <div className="slot-inner">
                    <h1>{props.x} {props.y} {props.z}</h1>
                    <h1>This isn't matched.</h1>
                    <hr/>
                </div>
            </>
        );
    }
}; 
const Slotapp1 = () =>{
        return(
            <>
                
                <h1 className="heading_style"> 🎰Welcome to <span style={{fontWeight : "bold"}}>Slot Machine Game </span>🎰</h1>
                

                <div className="slotmachine">
                <SlotM x = '😄' y = '😄' z = '😄'/>
                <SlotM x = '😄' y = '😄' z = '😄'/>
                <SlotM x = '😄' y = '😄' z = '😄'/>
                <SlotM x = '😄' y = '😄' z = '😄'/>
                </div>
            </>
         );
};

export default Slotapp1;
