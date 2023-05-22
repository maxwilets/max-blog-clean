import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';
import H3Style from '../styles/Typography';
import { EductationStyles } from './styles';
import DisplayError from '../ErrorMessage';
import School from './School';

export const ALL_SCHOOLS_QUERY = gql`
  query ALL_SCHOOLS_QUERY {
    educations {
      id
      name
      location
      time
      title
      photo {
        id
        altText
        image {
          publicUrlTransformed
        }
      }
    }
  }
`;

export default function Eductation() {
  const { data, loading, error } = useQuery(ALL_SCHOOLS_QUERY);
  if (loading) return <p>Loading...</p>;
  if (error) return <DisplayError error={error} />;
  const { educations: schools } = data;
  return (
    <EductationStyles>
      <H3Style>Education</H3Style>
      {schools.map((school) => (
        <School key={school.id} school={school} />
      ))}
    </EductationStyles>
  );
}
