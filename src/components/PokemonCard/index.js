import React from 'react';

import * as S from './styles';

const PokemonCard = () => {
  return (
    <S.CardWrapper>
      <S.PokemonName>Charizard</S.PokemonName>
      <S.PokemonNumber>#006</S.PokemonNumber>
    </S.CardWrapper>
  );
};

export default PokemonCard;
