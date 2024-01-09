/* eslint-disable import/no-unresolved */
import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';
import H3Style from '../styles/Typography';
import DisplayError from '../ErrorMessage';
import { Skill } from '../Skill';
import { SkillProp } from '../Types';

export const ALL_SKILLS_QUERY = gql`
  query ALL_SKILLS_QUERY {
    skills(orderBy: { level: desc }) {
      id
      level
      skillName
    }
  }
`;

export default function Skills(): any {
  const skillData = [
    {
      id: '23',
      level: '90',
      skillName: 'test1',
    },
    {
      id: '24',
      level: '55',
      skillName: 'test2',
    },
    {
      id: '24',
      level: '88',
      skillName: 'test3',
    },
    {
      id: '24',
      level: '87',
      skillName: 'test4',
    },
    {
      id: '25',
      level: '68',
      skillName: 'test5',
    },
  ];
  const { data, error, loading } = useQuery(ALL_SKILLS_QUERY);
  if (loading) return <p>Loading...</p>;
  if (error) return <DisplayError error={error} />;
  const { skills }: { skills: SkillProp[] } = data;

  return (
    <>
      <H3Style>Skills</H3Style>
      {skills.map((skill) => (
        <Skill key={skill.id} skill={skill} />
      ))}
    </>
  );
}
