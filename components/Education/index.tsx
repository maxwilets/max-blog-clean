/* eslint-disable import/no-unresolved */
import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';
import H3Style from '../styles/Typography';
import { EductationStyles } from './styles';
import DisplayError from '../ErrorMessage';
import { School } from './School';
import { SchoolProp } from '../Types';

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
  console.log(data);
  const { educations: schools } = data;
  // console.log(schools);
  return (
    <EductationStyles>
      <H3Style>Education</H3Style>
      {schools.map((school: SchoolProp) => (
        <School key={school.id} school={school} />
      ))}
    </EductationStyles>
  );
}