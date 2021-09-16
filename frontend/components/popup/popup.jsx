import React from 'react'

const Popup = (props) => {
    debugger
    return (props.trigger) ? (
        <div className="popup">
            <div className='popup-inner'>
                <button className="close-btn" onClick={()=> props.showPopup(false)}>x</button>
                {props.children}
            </div>
        </div> 
    ) : "";
}

export default Popup 