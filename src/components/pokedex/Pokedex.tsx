import React, { useState, useEffect } from "react";
import Cards from "../cards/Cards";
import axios from "axios";
import Pokeinfo from "../pokeInfo/Pokeinfo";

// Styles
import styles from "./Pokedex.module.scss";


const Pokedex = () => {
  const [pokeData, setPokeData] = useState<Object>([]);
  const [loading, setLoading] = useState<Boolean>(true);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
  const [nextUrl, setNextUrl] = useState();
  const [prevUrl, setPrevUrl] = useState();
  const [pokeDex, setPokeDex] = useState();

  const pokeFun = async () => {
    setLoading(true);
    const res = await axios.get(url);
    setNextUrl(res.data.next);
    setPrevUrl(res.data.previous);
    getPokemon(res.data.results);
    setLoading(false);
  };

  const getPokemon = async (res: any) => {
    res.map(async (item: any) => {
      const result = await axios.get(item.url);
      setPokeData((currentList: any) => {
        currentList = [...currentList, result.data].sort((a: any, b: any) => a.id - b.id );
        return currentList;
      });
    });
  };

  useEffect(() => {
    pokeFun();
  }, [url]);
  return (
    <>
    
    <div className={styles.pokedexContainer}>
  
      <div className={styles.leftContainer}>
        <Cards pokemon={pokeData} loading={loading} infoPokemon={(poke: any)=>setPokeDex(poke)} />
        <div className={styles.btnGrp}>
          { prevUrl && <button onClick={() => {
              setPokeData([])
              setUrl(prevUrl);
            }}>Previous</button>}
          { nextUrl && <button onClick={() => {
              setPokeData([])
              setUrl(nextUrl);
            }}>Next</button>}
        </div>
        <div className={styles.inputFilter}>
          <input type="text" placeholder="Enter Name" />
        </div>
      </div>
      <div className={styles.rightContainer}>
        <Pokeinfo data={pokeDex}/>
      </div>
    </div>
    </>
  );
};

export default Pokedex;
