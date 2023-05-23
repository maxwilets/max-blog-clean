import { useQuery } from '@apollo/client';
import { DocumentRenderer } from '@keystone-6/document-renderer';
import gql from 'graphql-tag';
import Breadcrumbs from '../../components/Breadcrumbs';

const SINGLE_POST_QUERY = gql`
  query SINGLE_POST_QUERY($id: String!) {
    post: posts(where: { slug: { equals: $id } }) {
      id
      content {
        document
      }
    }
  }
`;

export default function SingleProductPage({ query }) {
  console.log(query);
  const { data, loading, error } = useQuery(SINGLE_POST_QUERY, {
    variables: { id: query.id },
  });
  if (loading) return <p>Loading</p>;
  return (
    <>
      <Breadcrumbs />
      <DocumentRenderer document={data.post[0].content.document} />
    </>
  );
}
