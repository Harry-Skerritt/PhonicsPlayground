import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function PresentationPage() {
    const location = useLocation();
    const navigate = useNavigate();
    const [isShuffling, setIsShuffling] = useState(false);
    const { useShuffleScreen = true, shuffledResults = [] } = location.state || {};

    useEffect(() => {
        // Only navigate if both `isShuffling` and `useShuffleScreen` are true
        if (isShuffling && useShuffleScreen) {
            // Navigate to /presentation/shuffling
            navigate('/presentation/shuffling');
        }
    }, [isShuffling, useShuffleScreen, navigate]);

    return (
        <div>
            <h1>Presentation</h1>
            <div>
                {/* Example UI that allows toggling isShuffling */}
                <button onClick={() => setIsShuffling(true)}>Start Shuffle</button>
                {/* Render shuffled results */}
                {shuffledResults.length > 0 && shuffledResults.map((result, index) => (
                    <div key={index}>
                        <p>{result.join(' ')}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};


export default PresentationPage;

