const BACKGROUND_STYLE = {
    position: 'fixed',
    top: '0',
    bottom:'0',
    left:'0',
    right:'0',
    backgroundColor: 'rgba(0,0,0,0.7)',
    zIndex:'1000', }
 
 const MODAL_STYLE = {
    position: 'fixed',
    top: '50%',
    left:'50%',
    transform: 'translate(-50%, -50%)',
    padding: '150px',
    backgroundColor: '#fff',
    borderRadius:'10px',
    color:'black'
 }
 const BUTTON_STYLE = {

    backgroundColor: 'red', /* Cor de fundo do botão */
    color: 'white', /* Cor do texto do botão */
        position: 'absolute',
        top: '0',
        right: '0'    
 }

function AberturaModal({isOpen, setOpenModal, children}) {

    if(isOpen){
        return(
            <div style={BACKGROUND_STYLE}>
                <div style={MODAL_STYLE}>
                    <div>
                        {children}
                    </div>
                    <button onClick={setOpenModal}  style={BUTTON_STYLE}>X</button>
                </div>
            </div>
        )
    }
    return null
}
export default  AberturaModal
