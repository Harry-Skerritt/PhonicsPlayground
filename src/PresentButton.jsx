import React from 'react';
import './PresentButton.css';

function PresentButton( { onClicked, disabled }) {


    return (
        <div>
            <button className="present-button" onClick={onClicked} disabled={disabled}>
                PRESENT
            </button>
        </div>
    );
}

export default PresentButton;
