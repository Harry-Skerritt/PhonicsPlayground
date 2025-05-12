import React, { useEffect } from 'react';
import styles from '../ShuffleCards/ShuffleCards.module.css';
import {useNavigate} from "react-router-dom";

function ShuffleCards() {
    const navigate = useNavigate();

    useEffect(() => {
        // After 2 seconds, navigate back to /presentation
        const timer = setTimeout(() => {
            navigate('/presentation');
        }, 2000); // 2 seconds delay

        return () => clearTimeout(timer); // Cleanup the timeout on component unmount
    }, [navigate]);

    const cardStyles = Array.from({ length: 5 }, (_, index) => ({
        zIndex: 5 - index,
        animationDelay: `${index * 0.1}s`
    }));

    return (
        <div>
            <div className={styles.cardContainer}>
                {/* Left side shuffling */}
                <div className={styles.leftSide}>
                    {cardStyles.map((style, index) => (
                        <div
                            key={`left-${index}`}
                            className={styles.card}
                            style={{ ...style }}
                        ></div>
                    ))}
                </div>

                {/* Right side shuffling */}
                <div className={styles.rightSide}>
                    {cardStyles.map((style, index) => (
                        <div
                            key={`right-${index}`}
                            className={styles.card}
                            style={{ ...style }}
                        ></div>
                    ))}
                </div>
            </div>

            <h1 className={styles.shuffleText}>Shuffling</h1>

            <div className={styles.loaderWrapper}>
                <div className={styles.loader}></div>
            </div>
        </div>
    );
};


export default ShuffleCards;

