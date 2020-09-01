import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash , faEdit} from '@fortawesome/free-solid-svg-icons'



export default ({message , id ,deleteNote,handleShow}) => (
     
        <div className="Notes">
           <p>{message} 
           <span>  <FontAwesomeIcon icon={faTrash } onClick={() => deleteNote(id)}  />
         
           <button type="submit"  onClick={handleShow}> <FontAwesomeIcon icon={faEdit} /></button></span>
           
           </p> 
       
        
        </div>
    )

