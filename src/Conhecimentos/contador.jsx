import { useState } from "react"

function Contador(){

    const [count, setCount ] = useState(0)
    const[valueInput, setValueInput] = useState('Jorge')
    
    const add = () => {
        setCount(count + 1)
    }
    const onChangeInput = (event) => {
    setValueInput(event.target.value)
    }
    
    return(
        <>
            <h1>Contador {count}</h1>
            <button onClick ={add}> Adicionar</button>
            <div>
                <input onChange={onChangeInput}></input>
            </div>
            <h1>{valueInput}</h1>
        </>
    )
}
export default Contador