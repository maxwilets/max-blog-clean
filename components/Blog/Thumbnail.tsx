import React from 'react';

interface Tag {
  name: string;
}
interface IProps {
  __typename: string;
  id: string;
  slug: string;
  title: string;
  date: string;
  tags: Tag[];
  summary: string;
}

export default function Thumbnail({ post }: { post: IProps }) {
  const slug = `/blog/${post.slug}`;
  return (
    <a className="card" href={slug}>
      <article>
        <h1>{post.title}</h1>
        <p>
          <i>{post.date}</i>
        </p>
        {post.tags.map((tag) => (
          <a className="btn">{tag.name}</a>
        ))}

        <p>{post.summary}</p>
      </article>
    </a>
  );
}

// Thumbnail.propTypes = {
//   post: PropTypes.objectOf({
//     slug: PropTypes.string,
//     title: PropTypes.string,
//     date: PropTypes.string,
//     tags: PropTypes.array,
//   }),
// };
