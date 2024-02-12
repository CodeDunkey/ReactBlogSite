import './Modal.scss'
import { useState } from "react"

export const ModalExample = () => {

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
    
    {modal && (<div className="modal">
        <div className="overlay"></div>
        <div className="modal-content">
            <h1>Modal content</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Numquam vitae explicabo amet tenetur eius dignissimos, 
                blanditiis ut dolorem quas illo, sint saepe minus odit. 
                Pariatur rem saepe obcaecati deleniti delectus?
            </p>
        
        </div>
    </div>)}
    
</div>
)
}