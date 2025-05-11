import React, { useState } from "react";
import "./index.css";
import "./WordEntry.css"

function WordEntry()
{
    const [text, setText] = useState("");

    const lineCount = text.split("\n").filter((line) => line.trim() !== "").length;

    return (
        <div className={"word-entry-content"}>
            <div className={"wec-text-container"}>
                <h1 className={"title"}>Enter words to present: </h1>
                <div className={"wec-subtitle-row"}>
                    <h2 className={"subtitle"}>Separated by a new line</h2>
                    <span className={"word-count"}>Words: {lineCount}</span>

                </div>

            </div>
            <textarea value={text} onChange={(e) => setText(e.target.value)} placeholder={"Type words here..."}></textarea>
        </div>
    );
}

export default WordEntry;