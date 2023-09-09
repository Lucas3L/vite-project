import { useState } from "react"
import AberturaModal from "./AberturaModal"

function Modal(){
    const [openModal, setOpenModal] = useState(false)
    const [openModal2, setOpenModal2] = useState(false)

    return (
        <>
        <div>
            <button onClick = {() => setOpenModal(true)}>
                Abrir Modal
            </button>
            <button onClick = {() => setOpenModal2(true)}>
                Abrir Modal
            </button>
            <AberturaModal isOpen= {openModal} setOpenModal = {() => setOpenModal(!openModal)}>
                Modal 1 está aberto
            </AberturaModal>

            <AberturaModal isOpen= {openModal2}  setOpenModal = {() => setOpenModal2(!openModal2)}>
                Modal 2 está aberto
            </AberturaModal>
        </div>
        </>
    )
}
export default Modal
