"use client"
import { useState, useEffect } from 'react';
import "./Main.css"
function Main() {
  const placeholders = [
    "Ask to create a Landing page...",
    "Request a custom web app...",
    "Build your project with AI...",
    "Create a personalized design...",
    "Start building now..."
  ];

  const [currentPlaceholder, setCurrentPlaceholder] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const typingSpeed = 100;
    const pauseAfterTyping = 1000;
    
    let isMounted = true;
    let charIndex = 0;
    
    const typeText = () => {
      if (!isMounted) return;
      
      const currentText = placeholders[index];
      
      if (charIndex === 0) {
        setCurrentPlaceholder('');
      }
      
      if (charIndex <= currentText.length) {
        setCurrentPlaceholder(currentText.slice(0, charIndex));
        charIndex++;
        
        if (charIndex <= currentText.length) {
          setTimeout(typeText, typingSpeed);
        } else {
          // Finished typing, wait then move to next
          setTimeout(() => {
            if (isMounted) {
              setIndex((prev) => (prev + 1) % placeholders.length);
            }
          }, pauseAfterTyping);
        }
      }
    };
    
    // Start typing
    typeText();
    
    return () => {
      isMounted = false;
    };
  }, [index]);

  return (
    <main className="main-content">
      <h1>Building new <span className="highlight">► Landing Pages</span></h1>
      <p>Create apps and websites by chatting with AI</p>
      
      <div className="input-section">
        <input
          type="text"
          placeholder={currentPlaceholder}
          className="input-field"
        />
        <button className="build-button">Build</button>
      </div>
    </main>
  );
}

export default Main;