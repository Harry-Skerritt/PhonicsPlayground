import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import "./PresentationPage.css"
import "../index.css"

function PresentationPage() {
    const navigate = useNavigate();

    const nextSetButtonRef = useRef(null);
    const nextWordButtonRef = useRef(null);
    const prevWordButtonRef = useRef(null);

    const [isShuffling, setIsShuffling] = useState(false);
    const [shuffledResults, setShuffledResults] = useState([]);
    const [useShuffleScreen, setUseShuffleScreen] = useState(false);

    const [currentSetIndex, setCurrentSetIndex] = useState(0);
    const [currentWordIndex, setCurrentWordIndex] = useState(0);

    useEffect(() => {
        window.focus();
        document.body.focus();
    }, []);

    useEffect(() => {
        const storedResults = localStorage.getItem('shuffledResults');
        if(storedResults)
        {
            setShuffledResults(JSON.parse(storedResults));
        }
        else
        {
            alert("Something went wrong!");
            navigate('/');
        }

        console.log(storedResults);

        const storedShuffleScreen = localStorage.getItem('useShuffleScreen');
        if(storedShuffleScreen != null)
        {
            setUseShuffleScreen(Boolean(storedShuffleScreen));
        }
        else
        {
            setUseShuffleScreen(false);
        }

        const storedSetIndex = localStorage.getItem('currentSetIndex');
        if(storedSetIndex != null)
        {
            setCurrentSetIndex(Number(storedSetIndex));
        }
        else{
            setCurrentSetIndex(0);
        }
    }, []);

    useEffect(() => {
        // Only navigate if both `isShuffling` and `useShuffleScreen` are true
        if (isShuffling && useShuffleScreen) {
            // Navigate to /presentation/shuffling
            navigate('/presentation/shuffling');
            setIsShuffling(false);
        }
    }, [isShuffling, useShuffleScreen, navigate]);

    const handleNextSet = () => {
        if (currentSetIndex < shuffledResults.length - 1) {
            const nextSetIndex = currentSetIndex + 1;
            localStorage.setItem('currentSetIndex', JSON.stringify(nextSetIndex));

            setIsShuffling(true);
            setCurrentSetIndex(prevIndex => prevIndex + 1);
            setCurrentWordIndex(0);
        } else {
            localStorage.removeItem('currentSetIndex');
            if(window.confirm("All sets done! Press OK to continue"))
            {
                console.log("Confirmed Done");
                navigate('/');
                document.exitFullscreen();
            }
            else
            {
                console.log("Confirmed Cancel");
                navigate('/');
                document.exitFullscreen();
                localStorage.removeItem('currentSetIndex');

            }
        }
    };

    const handleWordNavigation = (direction) => {
        if (direction === 'next' && currentWordIndex < shuffledResults[currentSetIndex].length - 1) {
            setCurrentWordIndex(prevIndex => prevIndex + 1);
        } else if (direction === 'prev' && currentWordIndex > 0) {
            setCurrentWordIndex(prevIndex => prevIndex - 1);
        }
    };

    useEffect(() => {
        const handleKeyPress = (e) => {
            if (e.key === 'ArrowRight' && nextWordButtonRef.current)
            {
                nextWordButtonRef.current.click();
            }

            if (e.key === 'ArrowLeft' && prevWordButtonRef.current)
            {
                prevWordButtonRef.current.click();
            }

            if (e.key === 'Enter' && nextSetButtonRef.current)
            {
                nextSetButtonRef.current.click();
            }
        };

        document.addEventListener('keydown', handleKeyPress);
        return () => document.removeEventListener('keydown', handleKeyPress);
    }, [currentSetIndex, currentWordIndex]);



    useEffect(() => {
        const handleFullScreenChange = () => {
            if(!document.fullscreenElement)
            {
                console.log("Exited full screen");
                navigate('/');
            }
        }

        document.addEventListener('fullscreenchange', handleFullScreenChange);
        return () => document.removeEventListener('fullscreenchange', handleFullScreenChange);
    }, []);


    return (
        <div>
            <div>
                {shuffledResults.length > 0 && (
                    <div>
                        <h1 className={"displayed-word"}>{shuffledResults[currentSetIndex][currentWordIndex]}</h1>

                        <div className={"stats-container"}>
                            <div className={"counter-container"}>
                                <h2>Set {currentSetIndex + 1} / {shuffledResults.length}</h2>
                                <h2>Word: {currentWordIndex + 1} / {shuffledResults[currentSetIndex].length}</h2>
                            </div>

                            {currentWordIndex === shuffledResults[currentSetIndex].length - 1 && (
                                <button
                                    className={"next-set-button"}
                                    onClick={handleNextSet}
                                    ref={nextSetButtonRef}
                                >Next Set</button>
                            )}

                            <div className={"button-container"}>
                                <button
                                    onClick={() => handleWordNavigation('prev')}
                                    ref={prevWordButtonRef}
                                >{"←"}</button>

                                <button
                                    onClick={() => handleWordNavigation('next')}
                                    ref={nextWordButtonRef}
                                >{"→"}</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default PresentationPage;

