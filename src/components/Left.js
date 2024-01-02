import React, { useState, useEffect } from 'react';

const Left = ({ text, onScrollToAbout }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [hasPlayed, setHasPlayed] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    if (!hasPlayed) {
      let index = 0;
      const intervalId = setInterval(() => {
        if (index < text.length - 1) {
          setDisplayedText((prevText) => prevText + text[index]);
          index++;
        } else {
          clearInterval(intervalId);
          setHasPlayed(true);
        }
      }, 100);

      return () => {
        clearInterval(intervalId);
      };
    }
  }, [text, hasPlayed]);

  // Use another useEffect to handle cursor blinking
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500); // Adjust the blinking interval as needed

    return () => {
      clearInterval(cursorInterval);
    };
  }, []);

  const handleKnowMoreClick = () => {
    if (onScrollToAbout) {
      onScrollToAbout();
    }
  };

  return (
    <div >
      <div className="typewriter-text">
        {displayedText}
        {cursorVisible && <span className="cursor">|</span>}
      </div>
      <div>
        <p className='desc'>
          I'm a passionate Frontend Developer and MERN stack enthusiast💻. I love creating
          user-friendly interfaces and currently deepening my skills with the MERN stack. Web
          development is my passion—I find joy in turning ideas into visually appealing and
          functional websites.
        </p>
      </div>
      <button className='but1' onClick={handleKnowMoreClick}>
        Know more about me!
      </button>

    </div>
  );
};

export default Left;
