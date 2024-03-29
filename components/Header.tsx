import Link from 'next/link';
import styled from 'styled-components';
import React from 'react';
import { Nav } from './Nav';
import { Devices } from './Devices';
import { useScrollDirection } from '../hooks/useScroll';

const Logo = styled.h1`
  background: var(--offWhite);
  font-size: 2.5rem;
  position: relative;
  z-index: 2;
  transform: skew(-7deg);

  @media ${Devices.tablet} {
    font-size: 1.5rem;
  }
  a {
    color: var(--gray);
    text-decoration: none;
    text-transform: uppercase;
    padding: 0.5rem 1rem;
  }
`;

const HeaderStyles = styled.header`
  background-color: var(--gray);
  padding-left: 2%;
  width: 100%;
  z-index: 3;
  top: 0;
  transition-timing-function: ease-in;
  transition: 0.5s;

  .bar {
    max-width: 1000px;
    margin: auto;
    border-bottom: 10px solid var(--black, black);
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: space-between;
    align-items: center;
  }

  .sub-bar {
    dispaly: grid;
    grid-template-columns: auto 1fr;
    border-bottom: 1px solid var(--black, black);
  }
`;

export const Header = ({ ...props }): React.ReactNode | any => (
  <div
    className={`${useScrollDirection() === 'up' ? 'NavVisible' : 'NavHidden'}`}
    {...props}
  >
    <HeaderStyles>
      <div className={`bar `}>
        <Logo>
          <Link href="/">Max Wilets</Link>{' '}
        </Logo>

        <Nav />
      </div>
    </HeaderStyles>
  </div>
);
