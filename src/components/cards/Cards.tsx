import React from "react";
import fire from "../../assets/fire.svg";
import flying from "../../assets/flying.svg";
import dragon from "../../assets/dragon.svg";
// Styles
import styles from "./Cards.module.scss";

const Cards = ({ pokemon, loading, infoPokemon }: any) => {
  const isIdHandler = (num: string, length: number) => {
    return String(num).padStart(length, "0");
  };

  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        pokemon.map((item: any, index: any) => {
          return (
            <section key={index}>
              <div className={styles.cardContainer} onClick={()=>infoPokemon(item)}>
                <div className={styles.pokeId}>
                  <span>#{isIdHandler(`${item.id}`, 3)}</span>
                </div>
                <div className={styles.pokeImg}>
                  <img
                    src={item.sprites.other.dream_world.front_default}
                    alt=""
                  ></img>
                </div>
                <div className={styles.pokeName}>
                  <span>{item.name}</span>
                </div>
                <div className={styles.pokeType}>
                  <div className={styles.pokeTypeImg}>
                    <img src={fire} alt="" />
                  </div>
                  <div className={styles.pokeTypeImg}>
                    <img src={flying} alt="" />
                  </div>
                  <div className={styles.pokeTypeImg}>
                    <img src={dragon} alt="" />
                  </div>
                </div>
              </div>
            </section>
          );
        })
      )}
    </>
  );
};

export default Cards;
