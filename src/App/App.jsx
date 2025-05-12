import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import '../index.css';
import WordEntry from "./Components/WordEntry.jsx"
import ShuffleSlider from "./Components/ShuffleSlider/ShuffleSlider.jsx";
import PresentButton from "./Components/Buttons/PresentButton/PresentButton.jsx";
import ResetButton from "./Components/Buttons/OtherButtons/ResetButton.jsx";
import PreviewButton from "./Components/Buttons/OtherButtons/PreviewButton.jsx";

const App = () => {
    const navigate = useNavigate();
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


    const [text, setText] = useState('');
    const [shuffleAmount, setShuffleAmount] = useState(1);
    const [useShuffleScreen, setUseShuffleScreen] = useState(false);

    const wordArray = text.trim().split('\n').filter(word => word);
    const isButtonEnabled = wordArray.length > 0;

    const handleFullScreen = () =>
    {
        // Make site fullscreen
        const element = document.documentElement;
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen(); // Safari
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen(); // IE11
        }
    }

    const handleSubmit = () => {
        console.log('Shuffle Amount:', shuffleAmount);
        console.log('Words:', wordArray);
        console.log('Use Shuffle Screen:', useShuffleScreen);

        handleFullScreen();
        const uniqueShuffled = new Set();
        const shuffledResults = [];

        const shuffleArray = (arr) => {
            const copy = [...arr];
            for (let i = copy.length - 1; i >= 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [copy[i], copy[j]] = [copy[j], copy[i]];
            }
            return copy;
        }

        let attempts = 0;
        while(shuffledResults.length < shuffleAmount && attempts < 1000) {
            const shuffled = shuffleArray(wordArray);
            const key = shuffled.join('|');
            if(!uniqueShuffled.has(key))
            {
                uniqueShuffled.add(key);
                shuffledResults.push(shuffled);
            }
            attempts++;
        }

        if(shuffledResults.length < shuffleAmount)
        {
            console.warn(`Only ${shuffledResults.length} unique shuffles possible with ${wordArray.length} words.`);
        }

        console.log('Shuffled 2D Array: ', shuffledResults);
        navigate('/presentation', { state: { useShuffleScreen, shuffledResults } });
        localStorage.setItem('shuffledResults', JSON.stringify(shuffledResults));
        localStorage.setItems('useShuffleScreen', JSON.stringify(useShuffleScreen));

    }

    const handleReset = () => {
        console.log("Reset!");
        setText('');
        setShuffleAmount(1);
        setUseShuffleScreen(false);
        document.exitFullscreen();
    }

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
                        <span className="toggle-slider round"></span>
                    </label>
                </div>

            </header>

            <main>
                <WordEntry text={text} setText={setText} />
                <ShuffleSlider
                    value={shuffleAmount}
                    setValue={setShuffleAmount}
                    isChecked={useShuffleScreen}
                    setIsChecked={setUseShuffleScreen}/>


                <div className={"buttons"}>
                    <div className={"top-buttons"}>
                        <ResetButton disabled={!isButtonEnabled} onClicked={handleReset} />
                        <PreviewButton disabled={!isButtonEnabled} />
                    </div>

                    <PresentButton disabled={!isButtonEnabled} onClicked={handleSubmit} />
                </div>

            </main>
        </div>
    );
};

export default App;
