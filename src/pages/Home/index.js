import React from 'react';

import PokemonCard from '../../components/PokemonCard';

import * as S from './styles';

const Home = () => {
  return (
    <S.Container>
      <PokemonCard />
    </S.Container>
  );
};

export default Home;
