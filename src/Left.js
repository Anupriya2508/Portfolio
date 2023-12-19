import React, { useState, useEffect } from 'react';

const Typewriter = ({ text }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [hasPlayed, setHasPlayed] = useState(false);

  useEffect(() => {
    if (!hasPlayed) {
      let index = 0;
      const intervalId = setInterval(() => {
        if (index < text.length-1) {
          setDisplayedText((prevText) => prevText + text[index]);
          index++;
        } else {
          clearInterval(intervalId);
          setHasPlayed(true); // Set the flag to indicate animation has played
        }
      }, 100); // Adjust the delay as needed
      return () => {
        clearInterval(intervalId); // Cleanup interval on component unmount
      };
    }
  }, [text, hasPlayed]);

  return <div className="typewriter-text">{displayedText}</div>;
};

export default Typewriter;


