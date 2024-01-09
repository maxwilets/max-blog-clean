/* eslint-disable import/no-unresolved */
import PropTypes from 'prop-types';
import { SkillStyles } from './styles';
import { SkillProp } from '../Types';

export default function Skill({ skill }: { skill: SkillProp }) {
  return (
    <SkillStyles level={skill.level}>
      <p>
        <b>{skill.skillName}</b>
      </p>
      <span className="colorDial">
        <span>{skill.level}</span>
      </span>
    </SkillStyles>
  );
}
