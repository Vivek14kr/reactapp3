export const Groceryitem = ({title, id, handleToggle})=>{
    return <>
    <div>
        {title} -
       <button onClick={()=> handleToggle(id)}>Delete</button>
    </div>
    </>
}