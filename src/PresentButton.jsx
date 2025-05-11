import React, { useState } from 'react';
import './PresentButton.css';

function PresentButton() {
    const [words, setWords] = useState([]);
    const [shuffledWords, setShuffledWords] = useState([]);
    const [isPresenting, setIsPresenting] = useState(false);
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [message, setMessage] = useState('');
    const [shufflesCompleted, setShufflesCompleted] = useState(0);
    const [totalShuffles, setTotalShuffles] = useState(1);  // You can dynamically set this based on the slider

    const handlePresentClick = () => {
        const textArea = document.getElementById('word-textarea');
        const wordArray = textArea.value.trim().split('\n').filter(word => word);

        const shuffleCount = document.getElementById('shuffle-slider').value;
        setTotalShuffles(parseInt(shuffleCount));

        console.log("Shuffles: " + totalShuffles);

        // Set the words and shuffle them for the first time
        setWords(wordArray);
        shuffleAndDisplay(wordArray);
        setCurrentWordIndex(0);
        setMessage('');
        setIsPresenting(true);
    };

    const shuffleAndDisplay = (wordArray) => {
        const shuffled = shuffleArray(wordArray);
        setShuffledWords(shuffled);
        setShufflesCompleted(prev => prev + 1);
    };

    const shuffleArray = (array) => {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    };

    const handleKeyPress = (e) => {
        if (!isPresenting) return;

        if (e.key === 'ArrowRight') {
            if (currentWordIndex <= shuffledWords.length) {
                setCurrentWordIndex(currentWordIndex + 1);
            } else {
                setMessage('Set finished!');
            }
        } else if (e.key === 'ArrowLeft') {
            if (currentWordIndex > 0) {
                setCurrentWordIndex(currentWordIndex - 1);
            }
        } else if (e.key === "Escape")
        {
            setIsPresenting(false);
        }
    };

    const handleNextSet = () => {
        console.log("SC: " + shufflesCompleted + " TS: " + totalShuffles);
        if (shufflesCompleted < totalShuffles) {
            shuffleAndDisplay(words);  // Shuffle again if we haven't reached the shuffle limit
            setCurrentWordIndex(0);    // Reset the word index for the new shuffle
            setMessage('');
        } else {
            setMessage('All done!');
            setIsPresenting(false);
            setShufflesCompleted(0); // End the presentation when all shuffles are completed
        }
    };

    return (
        <div>
            <button className="present-button" onClick={handlePresentClick}>
                PRESENT
            </button>

            {/* Display words in full screen mode */}
            {isPresenting && (
                <div className="presentation-screen" tabIndex="0" onKeyDown={handleKeyPress}>
                    <h1>{shuffledWords[currentWordIndex]}</h1>
                    {message && <div className="completion-message">{message}</div>}
                    {currentWordIndex === shuffledWords.length - 1 && (
                        <button className="next-set-button" onClick={handleNextSet}>Next Set</button>
                    )}
                </div>
            )}
        </div>
    );
}

export default PresentButton;
