import React from "react";

// Styles
import styles from "./Pokeinfo.module.scss";

const Pokeinfo = ({ data }: any) => {
  return (
    <>
      {!data ? ( " " ) : (
        <>
          <h1>{data.name}</h1>
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`}
            alt=""
          />
          <div className={styles.abilities}>
            {data.abilities.map((poke: any) => {
              return (
                <>
                  <div className={styles.group}>
                    <h2>{poke.ability.name}</h2>
                  </div>
                </>
              );
            })}
          </div>
          <div className={styles.base_stat}>
            {data.stats.map((poke: any) => {
              return (
                <>
                  <h3>
                    {poke.stat.name}:{poke.base_stat}
                  </h3>
                </>
              );
            })}
          </div>
        </>
      )}
    </>
  );
};
export default Pokeinfo;
