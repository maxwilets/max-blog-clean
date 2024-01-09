/* eslint-disable import/no-unresolved */
import { SkillStyles } from './styles';
import { SkillProp } from '../Types';

export const Skill = ({ skill }: { skill: SkillProp }): any => (
  <SkillStyles level={skill.level}>
    <p>
      <b>{skill.skillName}</b>
    </p>
    <span className="colorDial">
      <span>{skill.level}</span>
    </span>
  </SkillStyles>
);
