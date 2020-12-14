import React from 'react';
import PropTypes from 'prop-types';

import SkillBar from './SkillBar';

import * as S from './styles';

const PokemonStats = ({ hp, attack, defense, spAttack, spDefense, speed }) => {
  return (
    <S.StatsSectionWrapper>
      <S.Column alignment="flex-end">
        <strong>health: </strong>
        <strong>attack: </strong>
        <strong>defense: </strong>
        <strong>sp. attack: </strong>
        <strong>sp. defense: </strong>
        <strong>speed: </strong>
      </S.Column>
      <S.Column flex={2}>
        <SkillBar skill={hp} />
        <SkillBar skill={attack} />
        <SkillBar skill={defense} />
        <SkillBar skill={spAttack} />
        <SkillBar skill={spDefense} />
        <SkillBar skill={speed} />
      </S.Column>
    </S.StatsSectionWrapper>
  );
};

PokemonStats.propTypes = {
  hp: PropTypes.number.isRequired,
  attack: PropTypes.number.isRequired,
  defense: PropTypes.number.isRequired,
  spAttack: PropTypes.number.isRequired,
  spDefense: PropTypes.number.isRequired,
  speed: PropTypes.number.isRequired,
};

export default PokemonStats;
