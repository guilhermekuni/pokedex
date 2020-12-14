import React, { useState, useEffect } from 'react';

import { getPokemon } from '../../services/api';

import SearchBar from '../../components/SearchBar';
import PokemonCard from '../../components/PokemonCard';

import * as S from './styles';

const Home = () => {
  const [currentPokemon, setCurrentPokemon] = useState(null);

  const handleGetPokemon = async (filter = 1) => {
    const formattedFilter = filter.toString().toLowerCase();
    const response = await getPokemon(formattedFilter);

    const { id, name, sprites, stats, types } = response.data;
    const { front_default } = sprites.other['official-artwork'];

    const pokemon = {
      id,
      name,
      sprite: front_default,
      stats,
      types,
    };

    setCurrentPokemon(pokemon);
  };

  useEffect(() => {
    handleGetPokemon();
  }, []);

  return (
    <S.Container>
      <SearchBar onSearch={handleGetPokemon} />
      {currentPokemon && <PokemonCard {...currentPokemon} />}
    </S.Container>
  );
};

export default Home;
