import React from 'react';
import ReactMarkdown from 'react-markdown';
import { useEffect, useState } from 'react';

const READMEPage = () => {
    const [readmeContent, setReadmeContent] = useState('');

    useEffect(() => {
        // Fetch the local-readme.md file and set the content
        fetch('./local-readme.md')
            .then(response => response.text())
            .then(data => setReadmeContent(data));
    }, []);

    return (
        <div className="readme-container">
            <ReactMarkdown>{readmeContent}</ReactMarkdown>
        </div>
    );
};

export default READMEPage;
