import React from "react";
// Styles
import styles from "./Cards.module.scss";

const svgImageHandler = (item: string) => {
  const svgImage = require(`../../assets/${item}.svg`);
  return svgImage;
};

const Cards = ({ pokemon, loading, infoPokemon }: any) => {
  const isIdHandler = (num: string, length: number) => {
    return String(num).padStart(length, "0");
  };

  return (
    <>
      {loading ? (
        <h1 className={styles.Loader}>Loading...</h1>
      ) : (
        pokemon.map((item: any) => {
          return (
            <section key={item.id}>
              <div
                className={styles.cardContainer}
                onClick={() => infoPokemon(item)}
              >
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
                {item.types.map((item: any) => (
                    <div className={styles.pokeTypeImg}>
                      <img src={svgImageHandler(item.type.name)} alt="" />
                    </div>
                ))}
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
