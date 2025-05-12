import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from "react-router-dom";
import '../index.css';
import WordEntry from "./Components/WordEntry.jsx"
import ShuffleSlider from "./Components/ShuffleSlider/ShuffleSlider.jsx";
import PresentButton from "./Components/Buttons/PresentButton/PresentButton.jsx";
import ResetButton from "./Components/Buttons/OtherButtons/ResetButton.jsx";
import PreviewButton from "./Components/Buttons/OtherButtons/PreviewButton.jsx";

const App = () => {
    const navigate = useNavigate();

    const [text, setText] = useState('');
    const [shuffleAmount, setShuffleAmount] = useState(1);
    const [useShuffleScreen, setUseShuffleScreen] = useState(false);

    const [loadedFromLS, setLoadedFromLS] = useState(false);

    let wordArray = text.trim().split('\n').filter(word => word);
    const isButtonEnabled = wordArray.length > 0;

    useEffect(() => {
        try {
            const mainWordArray = localStorage.getItem('mainWordArray');
            const mainShuffleAmount = localStorage.getItem('mainShuffleAmount');
            const mainShuffleScreen = localStorage.getItem('mainShuffleScreen');

            if(!mainWordArray || !mainShuffleAmount || !mainShuffleScreen)
            {
                setLoadedFromLS(false);
                return;
            }

            const parsedWords = JSON.parse(mainWordArray);
            const parsedShuffleAmount = JSON.parse(mainShuffleAmount);
            const parsedShuffleScreen = JSON.parse(mainShuffleScreen);

            if(!Array.isArray(parsedWords)) throw new Error("mainWordArray must be an array");

            setText(parsedWords.join('\n'));
            setShuffleAmount(Number(parsedShuffleAmount));
            setUseShuffleScreen(Boolean(parsedShuffleScreen));
            setLoadedFromLS(true);
            console.log("Loaded from LS");

        } catch(e)
        {
            console.error("Error loading from LS", e);
            alert("Something went wrong loading saved data. Resetting.");
            localStorage.removeItem('mainWordArray');
            localStorage.removeItem('mainShuffleAmount');
            localStorage.removeItem('mainShuffleScreen');
            window.location.reload();
        }
    }, []);

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

        localStorage.setItem("mainWordArray", JSON.stringify(wordArray));
        localStorage.setItem("mainShuffleAmount", JSON.stringify(shuffleAmount));
        localStorage.setItem("mainShuffleScreen", JSON.stringify(useShuffleScreen));

        console.log("Saved to local storage");

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
        localStorage.setItem('useShuffleScreen', JSON.stringify(useShuffleScreen));
        localStorage.removeItem('currentSetIndex');


    }

    const handleReset = () => {
        if(loadedFromLS) {
            const clear = window.confirm("Would you like to clear saved data?");

            if (clear) {
                localStorage.removeItem('mainWordArray');
                localStorage.removeItem('mainShuffleAmount');
                localStorage.removeItem('mainShuffleScreen');
                localStorage.removeItem('shuffledResults');
                localStorage.removeItem('useShuffleScreen');
                localStorage.removeItem('currentSetIndex');
                console.log("Saved data cleared");
                window.location.reload();
                return;
            }
        }

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

                <Link to={"/readme"} className={"how-to-link"}>How To Use</Link>

                {/*
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
                */}

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
                    </div>

                    <PresentButton disabled={!isButtonEnabled} onClicked={handleSubmit} />
                </div>

            </main>
        </div>
    );
};

export default App;
