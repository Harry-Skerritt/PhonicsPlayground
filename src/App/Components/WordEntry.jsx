import React from "react";
import "../../index.css";
import "./WordEntry.css"

function WordEntry({ text, setText })
{
    const lineCount = text.split("\n").filter((line) => line.trim() !== "").length;

    return (
        <div className={"word-entry-content"}>
            <div className={"wec-text-container"}>
                <h1 className={"title"}>Enter words to present: </h1>
                <span className={"word-count"}>Words: {lineCount}</span>
            </div>
            <textarea id={"word-textarea"} value={text} onChange={(e) => setText(e.target.value)} placeholder={"Separate words by a new line..."}></textarea>
        </div>
    );
}

export default WordEntry;