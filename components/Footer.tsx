// import Link from 'next/dist/client/link';

import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  background-color: var(--gray);
  margin: auto;
  padding: 1.25rem 0;
  color: var(--offWhite);
  z-index: 2;
  .footer-wrapper {
    max-width: 1000px;
    margin: auto;
    text-align: center;
  }
  a {
    color: var(--offWhite);
  }
`;

export const Footer = (): any => (
  <StyledFooter>
    <section className="footer-wrapper">
      {' '}
      <p className="footer-logo">Max Wilets &copy;2024</p>
      <span>
        Made with{' '}
        <a href="https://nextjs.org/" target="_blank" rel="noreferrer">
          Next.js
        </a>{' '}
        and{' '}
        <a href="https://keystonejs.com/" target="_blank" rel="noreferrer">
          Keystone.js
        </a>
      </span>
    </section>
  </StyledFooter>
);
