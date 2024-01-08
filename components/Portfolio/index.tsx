import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';
import { PortfolioStyles } from './style';
import DisplayError from '../ErrorMessage';
import Project from './Project';

// const project = [
//    test data for local development so don't have to hit API
//   {
//     __typename: 'Project',
//     id: 'proj123',
//     title: 'test project',
//     p1: 'here is a testing project testing UI',
//     p2: 'here is the second paragraph testing the UI for Project',
//     repo: 'https://github.com/maxwilets',
//     liveSite: 'https://maxwilets.io',
//     photo: {
//       altText: 'mountians',
//       image: {
//         publicUrlTransformed:
//           'https://res.cloudinary.com/dsna4d0gs/image/upload/v1640028217/samples/landscapes/nature-mountains.jpg',
//       },
//     },
//     technology: [
//       {
//         id: 'technology123',
//         name: 'javascript',
//         typeLink: 'https://javascript.com',
//       },
//       {
//         id: 'technology1234',
//         name: 'typescript',
//         typeLink: 'https;//typescript.com',
//       },

//     ],
//   },
// ];

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
type PhotoProps = {
  altText: string;
  image: { publicUrlTransformed: string };
};

type TechnologyProps = {
  id: string;
  name: string;
  typeLink: string;
};

type PropjectProps = {
  id: string;
  title: string;
  liveSite: string;
  p1: string;
  p2: string;
  p3: string;
  repo: string;
  photo: PhotoProps;
  technology: TechnologyProps[];
};
export default function Portfolio() {
  const { data, loading, error } = useQuery(ALL_PORTFOLIO_QUERY);
  if (loading) return <p>Loading...</p>;
  if (error) return <DisplayError error={error} />;
  const { portfolios: projects } = data;
  return (
    <PortfolioStyles>
      <h1>Projects</h1>
      {projects.map((project: PropjectProps) => (
        <>
          <Project key={project.id} projectData={project} />
          <hr key={project.title} />
        </>
      ))}
    </PortfolioStyles>
    // <PortfolioStyles>
    //   <h1>Projects</h1>
    //   {project.map((projects, i) => (
    //     <>
    //       <Project key={projects.title} projectData={projects} />
    //       <hr key={i} />
    //     </>
    //   ))}
    // </PortfolioStyles>
  );
}
