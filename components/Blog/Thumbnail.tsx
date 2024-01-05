import React from 'react';

type Tag = {
  name: string;
};
type IProps = {
  __typename: string;
  id: string;
  slug: string;
  title: string;
  date: string;
  tags: Tag[];
  summary: string;
};

export default function Thumbnail({ post }: { post: IProps }) {
  const slug: string = `/blog/${post.slug}`;
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
