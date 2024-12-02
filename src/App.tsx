import React from "react";

import { ChallengeComponent } from "./ChallengeComponent";

import styles from "./App.module.css";

function App() {
  return (
    <div>
      <header>
        <div className={styles.container}>
          <h1>Welcome To The Every.io Code Challenge.</h1>
          <div>
            <a
              target="_blank"
              href="https://www.figma.com/proto/kd49ArXbBt0vi1kBSLkmC1/Code-Challenge?node-id=1%3A2&scaling=min-zoom&page-id=0%3A1"
              className={styles.prototypeLink}
              rel="noreferrer"
            >
              Checkout the Prototype
            </a>
          </div>
        </div>
      </header>
      <main className={styles.main}>
        <ChallengeComponent />
      </main>
    </div>
  );
}

export default App;
