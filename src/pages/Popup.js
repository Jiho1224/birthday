import React from 'react'
import './Popup.scss'
function Popup(props) {
    return (props.trigger) ? (

        <div className="popup">
            <div class="close-button" onClick={() => props.setTrigger(false)}>
               Close
            </div>
            <div class="popup-inner">
                
                {props.children}

            </div>

        </div>
    ) : "";

    // return (props.trigger)?(
    //     <div className='popup'>

    //         <div class="modal">
    //             <div class="modal-wrap">
    //             <button className = "close-btn" onClick={()=> props.setTrigger(false)}>close</button>
    //                 {props.children}
    //             </div>
    //         </div>

    //     </div>


    // ) :"";
}

export default Popup