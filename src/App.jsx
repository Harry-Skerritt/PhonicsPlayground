import React, { useState, useEffect } from 'react';
import './index.css'; // Ensure you import the CSS styles
import WordEntry from "./WordEntry.jsx"
import ShuffleSlider from "./ShuffleSlider.jsx";

const App = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Check if dark mode preference is already set in localStorage
    useEffect(() => {
        const savedDarkMode = localStorage.getItem('darkMode') === 'true';
        setIsDarkMode(savedDarkMode);
        if (savedDarkMode) {
            document.body.classList.add('dark-mode');
        }

        // Add the 'show-header' class after a small delay to trigger the slide-down effect
        setTimeout(() => {
            document.querySelector('header').classList.add('show-header');
        }, 100); // Delay of 100ms for smoother animation
    }, []);

    const toggleDarkMode = () => {
        setIsDarkMode((prev) => {
            const newDarkMode = !prev;
            document.body.classList.toggle('dark-mode', newDarkMode);
            // Save preference to localStorage
            localStorage.setItem('darkMode', newDarkMode);
            return newDarkMode;
        });
    };

    return (
        <div className={"app-container"}>
            <header className={"app-header"}>

                <h1 className={"header-title"}>PHONICS PLAYGROUND</h1>

                <div className={"dark-mode-toggle"}>
                    <label className="switch">
                        <input
                            type="checkbox"
                            checked={isDarkMode}
                            onChange={toggleDarkMode}
                        />
                        <span className="slider round"></span>
                    </label>
                </div>

            </header>

            <main>
                <WordEntry />
                <ShuffleSlider />
            </main>
        </div>
    );
};

export default App;
