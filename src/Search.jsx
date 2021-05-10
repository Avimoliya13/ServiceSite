import React, { useState } from 'react';
import Sresult from "./SearchImg";

const Search = () =>{
    const [img, setImg] = useState("");

    const Searchh = (event) =>{
        setImg(event.target.value);
    }

    return(
        <>
            <input type="text" placeholder="Search Image" value={img} onChange={Searchh} />
            { img === "" ? null : (<Sresult name={img} />)}
        </>
    );
};

export default Search;
