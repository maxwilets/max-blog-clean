import Link from 'next/dist/client/link';
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

export default function Footer() {
  return (
    <StyledFooter>
      <section className="footer-wrapper">
        {' '}
        <p className="footer-logo">Max Wilets &copy;2023</p>
        <span>
          Made with{' '}
          <Link href="https://nextjs.org/" target="_blank">
            Next.js
          </Link>{' '}
          and{' '}
          <Link href="https://keystonejs.com/" target="_blank">
            Keystone.js
          </Link>
        </span>
      </section>
    </StyledFooter>
  );
}
