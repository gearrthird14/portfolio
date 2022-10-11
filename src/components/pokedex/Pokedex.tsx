import React from 'react';
import Cards from '../cards/Cards';

// Styles
import styles from './Pokedex.module.scss';

const Pokedex = () => {

  return (
    <div className={styles.pokedexContainer}>
      <div className={styles.leftContainer}>
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <div className={styles.btnGrp}>
          <button>Previous</button>
          <button>Next</button>
        </div>
      </div>
      <div className={styles.rightContainer}>

      </div>
    </div>
  )
}

export default Pokedex
