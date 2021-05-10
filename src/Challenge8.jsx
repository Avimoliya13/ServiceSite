import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import Clock from 'react-digital-clock';

const Challenge8 = () =>{

    const [value, setValue] = useState(0);

    const incValue = () =>{
        setValue(value+1);
    };

    const decValue = () =>{
        if(value>0)
        {
            setValue(value-1);
        }else
        {
            alert("Sorry 😆 limit has reached");
            setValue(0);
        }
    };

    return(
        <>
            <div className="main_div">
                <div className="center_div">
                    <h2 style={{fontWeight: 500, color: 'red', backGroundColor: 'black'}}><Clock /></h2>
                    <h1> {value} </h1>
                    <div className="btn_div">
                        <Tooltip title="Increment">
                            <Button onClick={incValue} className="btn_inc"> <AddIcon /> </Button>
                        </Tooltip>
                        <Tooltip title="Decrement">
                            <Button onClick={decValue} className="btn_dec"> <RemoveIcon /> </Button>
                        </Tooltip>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Challenge8; 