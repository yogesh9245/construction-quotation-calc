import React, { useState, useEffect } from 'react';

const TypingEffect = (props) => {
  const [text, setText] = useState('');
  const sentence = props.text;
  const typingSpeed = 100; // Adjust the typing speed (milliseconds per character)

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      setText(sentence.slice(0, currentIndex));
      currentIndex++;

      if (currentIndex > sentence.length) {
        clearInterval(interval);
      }
    }, typingSpeed);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className='m-4'>
      <h1 style={{backgroundImage: 'linear-gradient(to right, #d69ded, #00ff00)'}}>{text}</h1>
    </div>
  );
};

export default TypingEffect;
