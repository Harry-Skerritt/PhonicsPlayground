import React from 'react';
import './ResetButton.css';

function ResetButton( { onClicked, disabled }) {


    return (
        <div>
            <button className="reset-button" onClick={onClicked} disabled={disabled}>
                RESET
            </button>
        </div>
    );
}

export default ResetButton;
