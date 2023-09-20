import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';
import H3Style from '../styles/Typography';
import { CourseworkStyles } from './styles';
import DisplayError from '../ErrorMessage';
import Course from './Course';

export const ALL_COURSEWORK_QUERY = gql`
  query ALL_COURSEWORK_QUERY {
    courseworks {
      id
      name
      course
      description
      link
      author
      photo {
        altText
        image {
          publicUrlTransformed
        }
        id
      }
    }
  }
`;

export default function Coursework() {
  const { data, loading, error } = useQuery(ALL_COURSEWORK_QUERY);
  if (loading) return <p>Loading...</p>;
  if (error) return <DisplayError error={error} />;
  const { courseworks: courses } = data;

  // const { allCourseworks } = data;
  return (
    <CourseworkStyles>
      <H3Style>Recent Coursework</H3Style>
      {courses.map((course) => (
        <Course key={course.id} course={course} />
      ))}
    </CourseworkStyles>
  );
}
