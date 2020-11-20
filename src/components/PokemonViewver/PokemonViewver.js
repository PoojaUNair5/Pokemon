import React from "react";
import PropTypes from "prop-types";
import styles from "./PokemonViewver.module.css";

const PokemonViewver = ({pokemonData, status='idle'}) => {


  return <div className={styles.PokemonViewver}>
    {status === 'idle' && <div>Idle: Search ur pokemon here!</div>}
    {status === 'loading' && <div className={styles.wrapper}>
    <div className={styles.loadingSpinner}></div>
    </div>}
    {status === 'resolved' && <div>Resolved: Got a pokemon</div>}
    {status === 'error' && <div className={styles.error}>Error: There was an error fetching the pokemon</div>}
  </div>;
};

PokemonViewver.propTypes = {};

export default PokemonViewver;
