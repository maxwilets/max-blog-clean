import Link from 'next/link';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import Nav from './Nav';
import { Devices } from './Devices';

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
  position: fixed;
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

  .hidden {
    visibility: hidden;
  }
`;

export default function Header() {
  const [show, setShow] = useState(true);
  console.log(window.scrollY);
  const controlNavbar = () => {
    if (window.scrollY > 150) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, []);
  return (
    <div className={`${!show && 'hidden'}`}>
      <HeaderStyles>
        <div className={`bar `}>
          <Logo>
            <Link href="/">Max Wilets</Link>{' '}
          </Logo>
          <div className={`${!show && 'none'}`}>
            <Nav />
          </div>
        </div>
      </HeaderStyles>
    </div>
  );
}
