import React, { useState, useEffect, useCallback, useContext } from 'react';

import { getPokemon, getPokemonSpecies } from '../../services/api';

import LoadingContext from '../../contexts/loading';

import SearchBar from '../../components/SearchBar';
import PokemonCard from '../../components/PokemonCard';

import * as S from './styles';

const Home = () => {
  const [, setLoading] = useContext(LoadingContext);
  const [currentPokemon, setCurrentPokemon] = useState(null);

  const handleGetPokemon = useCallback(
    async (filter = 1) => {
      setLoading(true);

      const formattedFilter = filter.toString().toLowerCase();
      const response = await getPokemon(formattedFilter);

      const { id, name, sprites, stats, types } = response.data;
      const { front_default } = sprites.other['official-artwork'];

      const pokemonSpecies = await getPokemonSpecies(id);
      const { names } = pokemonSpecies.data;

      const pokemon = {
        id,
        name,
        sprite: front_default,
        japaneseName: names[0].name,
        stats,
        types,
      };

      setCurrentPokemon(pokemon);
      setTimeout(() => setLoading(false), [500]);
    },
    [setLoading],
  );

  useEffect(() => {
    handleGetPokemon();
  }, [handleGetPokemon]);

  return (
    <S.Container>
      <SearchBar onSearch={handleGetPokemon} />
      {currentPokemon && <PokemonCard {...currentPokemon} />}
    </S.Container>
  );
};

export default Home;
