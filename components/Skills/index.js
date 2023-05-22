import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';
import H3Style from '../styles/Typography';
import { SkillsSyles } from './styles';
import DisplayError from '../ErrorMessage';
import Skill from '../Skill';

export const ALL_SKILLS_QUERY = gql`
  query ALL_SKILLS_QUERY {
    skills(orderBy: { level: desc }) {
      id
      level
      skillName
    }
  }
`;

export default function Skills() {
  const { data, error, loading } = useQuery(ALL_SKILLS_QUERY);
  if (loading) return <p>Loading...</p>;
  if (error) return <DisplayError error={error} />;
  const { skills } = data;

  return (
    <>
      <H3Style>Skills</H3Style>
      {skills.map((skill) => (
        <Skill key={skill.id} skill={skill} />
      ))}
    </>
  );
}
