import Link from 'next/link';
import React from 'react';
import NavStyles from './styles/NavStyles';

export const Nav = (): React.ReactNode | any => (
  <NavStyles>
    <Link href="/resume">Resume</Link>
    <Link href="/portfolio">Portfolio</Link>
    <Link href="/blog">Blog</Link>
    <a href="mailto:mwilets@gmail.com" className="btn blue no-hover">
      Contact
    </a>
  </NavStyles>
);
