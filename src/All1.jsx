import React from "react";
import Card from "./Card";
import Sdata from "./Sdata";

const All1 = () =>{
    return(
    <>
    <h1 className="heading_style"> List of top Series </h1>
    {Sdata.map((val) => {
        return(
            <Card
            key={val.id}
            imgsrc={val.imgsrc}
            title={val.title}
            sname={val.sname}
            link={val.link}
            />
        );
    })}
</>
    );
}

export default All1;