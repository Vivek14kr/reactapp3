import { useState } from "react"

function Counter({val}){
const [count, setCount] = useState(val)

const changeCount = (value) => {
    setCount(count + value)
}
const doubleCount = (value) => {
    setCount(count * value)
}
return (
<div>
        <h1 >Counter:{count}</h1>
<button onClick= {()=> changeCount(1)} >Add</button>
    <button onClick= {()=> changeCount(-1)} >Subtract</button>
     <button onClick={() => doubleCount(2)} >Double</button>
    </div>
)
    }

    export {Counter}