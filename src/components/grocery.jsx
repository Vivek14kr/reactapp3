import { Groceryinput } from './groceryinput'
import { useState } from 'react';

import { Groceryitem } from './Grocerylist';
import {nanoid} from "nanoid"


export const Grocery = () => {
    const [list, setlist] = useState([]);
    const handleClick = (data) => {
      const payload = {
          title:data,
          status:false,
          id:nanoid(7)
      }
        setlist([...list, payload])
    }
    
   const handleToggle = (id)=>{
       const kk = list.filter(item=> item.id !== id)
       setlist(kk);

   }


    return <>
        <Groceryinput getData={handleClick} />
        {list.map((e) => 
        <Groceryitem key={e.id} {...e} handleToggle={handleToggle}/>
        )}
    </>
}