import './App.css';
import {Counter} from "./components/counter"

function App() {
 let count = 0
 return(
   <div className="App">
     
     <Counter val={count}/>
    
   </div>
 )
  
} 

export default App;