import React, { useState, useEffect } from 'react';

import { getPokemon } from '../../services/api';

import PokemonCard from '../../components/PokemonCard';

import * as S from './styles';

const Home = () => {
  const [currentPokemon, setCurrentPokemon] = useState(null);

  useEffect(() => {
    const handleGetPokemon = async () => {
      const response = await getPokemon({ id: 189 });
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

    handleGetPokemon();
  }, []);

  return (
    <S.Container>
      {currentPokemon && <PokemonCard {...currentPokemon} />}
    </S.Container>
  );
};

export default Home;
