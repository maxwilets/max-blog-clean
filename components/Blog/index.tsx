/* eslint-disable import/no-unresolved */
import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';
import H3Style from '../styles/Typography';
import { BlogStyle } from './style';
// eslint-disable-next-line import/no-unresolved
import Thumbnail from './Thumbnail';
import { PostProps } from '../Types';

export const ALL_POSTS_QUERY = gql`
  query ALL_POSTS_QUERY {
    posts {
      id
      title
      slug
      summary
      date
      tags {
        id
        name
      }
    }
  }
`;

export default function Blog() {
  const { data, loading, error } = useQuery(ALL_POSTS_QUERY);
  if (loading) return <p>Loading</p>;
  if (error) return error;
  const { posts }: { posts: PostProps[] } = data;
  const postsSort: PostProps[] = [...posts];
  return (
    <BlogStyle>
      <h1>Blog</h1>
      <H3Style>All Posts</H3Style>
      <section className="cardContainer">
        {postsSort.reverse().map((post) => (
          <Thumbnail post={post} />
        ))}
      </section>
    </BlogStyle>
  );
}
