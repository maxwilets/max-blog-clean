import PropTypes from 'prop-types';

export default function Thumbnail({ post }) {
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

Thumbnail.propTypes = {
  post: PropTypes.objectOf({
    slug: PropTypes.string,
    title: PropTypes.string,
    date: PropTypes.string,
    tags: PropTypes.array,
  }),
};
