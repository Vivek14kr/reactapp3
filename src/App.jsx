import './App.css';
import { useState } from "react"

function App() {
 const [count, setCount] = useState(0)

 const changeCount = (value)=>{
   setCount(count + value)
 }
  const doubleCount = (value) => {
    setCount(count * value)
  }
 return(
   <div className="App">
     <h3>Counter: {count}</h3>
    <button onClick= {()=> changeCount(1)} >Add</button>
    <button onClick= {()=> changeCount(-1)} >Subtract</button>
     <button onClick={() => doubleCount(2)} >Double</button>
   </div>
 )
  
} 

export default App;