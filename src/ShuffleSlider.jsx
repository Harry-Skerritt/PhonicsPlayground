import React from "react";
import "./index.css";
import "./ShuffleSlider.css";

function ShuffleSlider({ value, setValue, isChecked, setIsChecked }) {
    return (
        <div className="number-slider-container">
            <h1 className={"shuffle-title"}>Shuffle Settings</h1>
            <div className="slider-content">
                <h2 className="number-label">Times to shuffle: {value}</h2>
                <input
                    type="range"
                    min="1"
                    max="10"
                    step="1"
                    value={value}
                    onChange={(e) => setValue(Number(e.target.value))}
                    className="slider"
                    id={"shuffle-slider"}
                />
            </div>
            <div className={"shuffle-screen-content"}>
                <input type={"checkbox"} className={"shuffle-screen-content-input"} checked={isChecked} onChange={(e) => setIsChecked(e.target.checked)} />
                <h2 className={"checkbox-label"}>Use shuffle screen</h2>
            </div>
        </div>
    );
}

export default ShuffleSlider;