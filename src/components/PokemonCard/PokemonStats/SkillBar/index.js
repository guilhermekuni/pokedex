import React from 'react';
import PropTypes from 'prop-types';

import { MAX_STAT } from '../../../../utils/constants';

import * as S from './styles';

const SkillBar = ({ skill }) => {
  const formattedSkill = skill.toString().padStart(3, '0');
  const skillPercent = (100 * skill) / MAX_STAT;

  return (
    <S.Wrapper>
      <p>{formattedSkill}</p>
      <S.Bar>
        <S.Skill percent={skillPercent} />
      </S.Bar>
    </S.Wrapper>
  );
};

SkillBar.propTypes = {
  skill: PropTypes.number.isRequired,
};

export default SkillBar;
