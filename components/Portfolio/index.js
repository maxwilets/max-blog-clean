import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';
import { PortfolioStyles } from './style';
import DisplayError from '../ErrorMessage';
import Project from './Project';

export const ALL_PORTFOLIO_QUERY = gql`
  query ALL_PORTFOLIO_QUERT {
    portfolios {
      id
      title
      liveSite
      p1
      p2
      p3
      repo
      photo {
        altText
        image {
          publicUrlTransformed
        }
      }
      technology {
        id
        name
        typeLink
      }
    }
  }
`;

export default function Portfolio() {
  const { data, loading, error } = useQuery(ALL_PORTFOLIO_QUERY);
  if (loading) return <p>Loading...</p>;
  if (error) return <DisplayError error={error} />;
  const { portfolios: projects } = data;
  return (
    <>
      <h1>Projects</h1>
      {projects.map((project) => (
        <Project key={project.id} projectData={project} />
      ))}
    </>
  );
}
