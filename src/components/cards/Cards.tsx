import React from 'react';
import fire from '../../assets/fire.svg';
import flying from '../../assets/flying.svg';
import dragon from '../../assets/dragon.svg';
// Styles
import styles from './Cards.module.scss';

const Cards = () => {

  const isIdHandler = (num: number, length: number) => {
    return String(num).padStart(length, '0');
  }

  return (
    <>
      <div className={styles.cardContainer}>
        <div className={styles.pokeId}>
          <span>#{isIdHandler(3,3)}</span>
        </div>
        <div className={styles.pokeImg}>
          <img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/4.svg' alt=''></img>
        </div>
        <div className={styles.pokeName}>
          <span>Charmander</span>
        </div>
        <div className={styles.pokeType}>
          <div className={styles.pokeTypeImg}>
            <img src={fire} alt='' />
          </div>
          <div className={styles.pokeTypeImg}>
            <img src={flying} alt='' />
          </div>
          <div className={styles.pokeTypeImg}>
            <img src={dragon} alt='' />
          </div>
        </div>
      </div>
    </>
  )
}

export default Cards