import './Modal.scss'
import { useState } from "react"

export const Modal = () => {

const [modal, setModal] = useState(false)
 
const toggleModal = () =>{
    setModal(!modal)
}
// if(modal){
//     document.body.classList.add('active-modal')
// }
// else{
//     document.body.classList.remove('active-modal')
// }
console.log('modal', modal);
return(
<div>
    <button onClick={toggleModal}>Open</button>
    {modal && (<div className="modal">
        <div className="overlay"></div>
        <div className="modal-content">
            <h1>Modal content</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Numquam vitae explicabo amet tenetur eius dignissimos, 
                blanditiis ut dolorem quas illo, sint saepe minus odit. 
                Pariatur rem saepe obcaecati deleniti delectus?
            </p>
        <button className='close-modal' onClick={toggleModal}>Close</button>
        </div>
    </div>)}
    
</div>
)
}