import React, { useState } from "react";
import "./index.css";
import "./ShuffleSlider.css";

function ShuffleSlider() {
    const [value, setValue] = useState(1);

    return (
        <div className="number-slider-container">
            <div className="slider-content">
                <h1 className="number-label">Times to shuffle: {value}</h1>
                <input
                    type="range"
                    min="1"
                    max="10"
                    step="1"
                    value={value}
                    onChange={(e) => setValue(parseInt(e.target.value))}
                    className="slider"
                />
            </div>
        </div>
    );
}

export default ShuffleSlider;