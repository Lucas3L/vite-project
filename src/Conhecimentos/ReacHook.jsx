import { useReducer } from 'react'

 function ReacHook() {

    const reducer = (state, action) => {
        switch (action.type) {
            case 'IncrementAndShowText':
              return { count: state.count + 1, showText: !state.showText }
            case 'resetValue':
              return { count: 0, showText: true }
            default:
              return "This action doens't exist"
          }
    }
    const [state, dispatch] = useReducer(reducer, {
        count: 0,
        showText: true,
      })
    
      const { count, showText } = state
    
      const handleClick = () => {
        dispatch({ type: 'IncrementAndShowText' })
      }

  

  return (
    <div className='App'>
      <h1>CONTADOR</h1>
      <h3>{count}</h3>
      <button onClick={handleClick}>Clique</button>
      <button onClick={() => dispatch({ type: 'resetValue' })}>Reset</button>
      <>
      {showText && <p>Faltam {100 - count} para 100 clicks</p>}
      </>
      
    </div>
  )
}

export default  ReacHook
