import PropTypes from 'prop-types';
import { SkillStyles } from './styles';

export default function Skill({ skill }) {
  return (
    <SkillStyles $level={skill.level}>
      <p>
        <b>{skill.skillName}</b>
      </p>
      <span className="colorDial">
        <span>{skill.level}</span>
      </span>
    </SkillStyles>
  );
}

Skill.propTypes = {
  skill: PropTypes.objectOf({
    level: PropTypes.string,
    skillName: PropTypes.string,
  }),
};
