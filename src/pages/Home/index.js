import React, { useState, useEffect, useContext } from 'react';

import { getPokemon } from '../../services/api';

import LoadingContext from '../../contexts/loading';

import SearchBar from '../../components/SearchBar';
import PokemonCard from '../../components/PokemonCard';

import * as S from './styles';

const Home = () => {
  const [, setLoading] = useContext(LoadingContext);
  const [currentPokemon, setCurrentPokemon] = useState(null);

  const handleGetPokemon = async (filter = 1) => {
    setLoading(true);

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
    setTimeout(() => setLoading(false), [500]);
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
