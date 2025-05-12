import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import "./PresentationPage.css"

function PresentationPage() {
    const navigate = useNavigate();

    const [isShuffling, setIsShuffling] = useState(false);
    const [shuffledResults, setShuffledResults] = useState([]);
    const [useShuffleScreen, setUseShuffleScreen] = useState(false);

    const [currentSetIndex, setCurrentSetIndex] = useState(0);
    const [currentWordIndex, setCurrentWordIndex] = useState(0);

    useEffect(() => {
        const storedRestults = localStorage.getItem('shuffledResults');
        if(storedRestults)
        {
            setShuffledResults(JSON.parse(storedRestults));
        }

        const storedShuffleScreen = localStorage.getItem('useShuffleScreen');
        if(storedShuffleScreen)
        {
            setUseShuffleScreen(JSON.parse(storedShuffleScreen));
        }
    }, []);

    useEffect(() => {
        // Only navigate if both `isShuffling` and `useShuffleScreen` are true
        if (isShuffling && useShuffleScreen) {
            // Navigate to /presentation/shuffling
            navigate('/presentation/shuffling');
        }
    }, [isShuffling, useShuffleScreen, navigate]);

    const handleNextSet = () => {
        if (currentSetIndex < shuffledResults.length - 1) {
            setCurrentSetIndex(prevIndex => prevIndex + 1);
            setCurrentWordIndex(0);
        } else {
            alert("Done! Press ESC to exit.");
        }
    };

    const handleWordNavigation = (direction) => {
        if (direction === 'next' && currentWordIndex < shuffledResults[currentSetIndex].length - 1) {
            setCurrentWordIndex(prevIndex => prevIndex + 1);
        } else if (direction === 'prev' && currentWordIndex > 0) {
            setCurrentWordIndex(prevIndex => prevIndex - 1);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'ArrowRight') handleWordNavigation('next');
        if (e.key === 'ArrowLeft') handleWordNavigation('prev');
    };

    useEffect(() => {
        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress);
    }, [currentSetIndex, currentWordIndex]);

    return (
        <div>
            <div>
                {shuffledResults.length > 0 && (
                    <div>
                        <h1 className={"displayed-word"}>{shuffledResults[currentSetIndex][currentWordIndex]}</h1>

                        <div className={"counter-container"}>
                            <h2>Set {currentSetIndex + 1} / {shuffledResults.length}</h2>
                            <h2>Word: {currentWordIndex + 1} / {shuffledResults[currentSetIndex].length}</h2>
                        </div>
                        <button onClick={() => handleWordNavigation('prev')}>{"<"}</button>
                        <button onClick={() => handleWordNavigation('next')}>{">"}</button>

                        {currentWordIndex === shuffledResults[currentSetIndex].length - 1 && (
                            <button onClick={handleNextSet}>Next Set ></button>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}

export default PresentationPage;

