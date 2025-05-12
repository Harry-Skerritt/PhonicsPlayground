import React from 'react';
import './ResetButton.css';

function PreviewButton( { onClicked, disabled }) {


    return (
        <div>
            <button className="reset-button" onClick={onClicked} disabled={disabled}>
                PREVIEW
            </button>
        </div>
    );
}

export default PreviewButton;
