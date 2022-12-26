import React from "react";
import styles from "./HowItWorks.module.css";
import Hero from "./style";
import ReactTypingEffect from "react-typing-effect";

function HowItWorks() {
  return (
    <Hero.Content>
      <div className={styles.container}>
        <div className={styles.text1}> How it works?</div>
        <div className={styles.hr} />
        <div className={styles.text2}>It works 
        <span className={styles.perfectContent}></span>
        <ReactTypingEffect
        text={["Perfectly.", "Flawlessly.", "Excellently."]}
        className={`highlight-text d-inline-block ${styles.renderingTextColor}`}
        speed="150"
        eraseSpeed="100"
        typingDelay="400"
        eraseDelay="800"
        cursorClassName="typed-cursor"
      />
        </div>
      </div>
      </Hero.Content>
  );
}

export default HowItWorks;
