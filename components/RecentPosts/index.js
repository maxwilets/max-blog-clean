import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';
import { EmailLogo } from '../../icons/EmailLogo';
import { RssFeed } from '../../icons/RssFeed';
import { ServicesStyles } from '../Services/styles';
import { PostStyles } from './styles';
import { BlogStyle } from '../Blog/style';
// import Thumbnail from '../Blog/Thumbnail';

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

export default function RecentPosts() {
  const { data, loading, error } = useQuery(ALL_POSTS_QUERY);
  if (loading) return <p>Loading</p>;
  console.log(data);
  const { posts } = data;
  return (
    <PostStyles>
      <section className="header">
        <span className="imageConatiner">
          {' '}
          <RssFeed />
        </span>
        <p className="connectHeader">RECENT POSTS</p>
      </section>
      <BlogStyle>
        <section className="cardContainer">
          {/* {posts
            .reverse()
            .map((post, i) => (i > 2 ? null : <Thumbnail post={post} />))} */}
        </section>
      </BlogStyle>
    </PostStyles>
  );
}
