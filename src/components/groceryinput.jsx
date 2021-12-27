import { useState } from "react";

export const Groceryinput = ({getData}) => {
   const [text, setText] = useState("");
    const handleChange = (e)=>{
        setText(e.target.value)
    }

    const handleclick = ()=>{
        getData(text)
    }
    return <>
    <input type="text" placeholder="Enter Items"  onChange={handleChange}/>
    <button onClick={handleclick}>Add</button>
    </>
}