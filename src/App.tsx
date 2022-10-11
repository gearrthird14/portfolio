import React from 'react';
import styles from './App.module.scss';
import Pokedex from './components/pokedex/Pokedex';


function App() {
  return (
    <>
      <div className={styles.appContainer}>
        <Pokedex />
      </div>
    </>
  );
}

export default App;
