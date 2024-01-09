/* eslint-disable import/no-unresolved */
import React from 'react';

import { PostProps } from '../Types';

export default function Thumbnail({ post }: { post: PostProps }) {
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
