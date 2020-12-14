import React from 'react';
import PropTypes from 'prop-types';

import bug from '../../assets/icons/types/bug.svg';
import dark from '../../assets/icons/types/dark.svg';
import dragon from '../../assets/icons/types/dragon.svg';
import electric from '../../assets/icons/types/electric.svg';
import fairy from '../../assets/icons/types/fairy.svg';
import fighting from '../../assets/icons/types/fighting.svg';
import fire from '../../assets/icons/types/fire.svg';
import flying from '../../assets/icons/types/flying.svg';
import ghost from '../../assets/icons/types/ghost.svg';
import grass from '../../assets/icons/types/grass.svg';
import ground from '../../assets/icons/types/ground.svg';
import ice from '../../assets/icons/types/ice.svg';
import normal from '../../assets/icons/types/normal.svg';
import poison from '../../assets/icons/types/poison.svg';
import psychic from '../../assets/icons/types/psychic.svg';
import rock from '../../assets/icons/types/rock.svg';
import steel from '../../assets/icons/types/steel.svg';
import water from '../../assets/icons/types/water.svg';

import * as S from './styles';

const types = {
  bug,
  dark,
  dragon,
  electric,
  fairy,
  fighting,
  fire,
  flying,
  ghost,
  grass,
  ground,
  ice,
  normal,
  poison,
  psychic,
  rock,
  steel,
  water,
};

const PokemonTypeIcon = ({ type }) => {
  return (
    <S.IconWrapper type={type}>
      <S.TypeIcon src={types[type]} alt={`${type} icon`} />
    </S.IconWrapper>
  );
};

PokemonTypeIcon.propTypes = {
  type: PropTypes.string.isRequired,
};

export default PokemonTypeIcon;
