import PropTypes from 'prop-types';
import styled, { createGlobalStyle } from 'styled-components';
import { useRouter } from 'next/dist/client/router';
import { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Connect from './Connect';
import { Devices } from './Devices';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'radnika_next';
    src: url('/static/radnikanext-medium-webfont.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }
  html {
    --red: #ff0000;
    --black: #393939;
    --grey: #3A3A3A;
    --gray: var(--grey);
    --lightGrey: #e9e9e9;
    --lightGray: var(--lightGrey);
    --blue: #309af3;
    --darkBlue: #082c4e;
        --white: #fff;
    --offWhite: #ededed;
    --maxWidth: 1100px;
    --bs: 0 12px 24px 0 rgba(0,0,0,0.09);
    box-sizing: border-box;
    font-size: 62.5%;
    margin: auto;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    font-family:--apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height:2;
  }
  a {
    color: var(--black);
  }
  a:hover {
    text-decoration: underline;
  }

  h4 {
    font-size: 2.5rem;
    margin-bottom: 16px;
    margin-top: 8px;
  }


  h5 { font-size: 1.9rem; margin-bottom: 16px; margin-top: 0; }

  ul {
    padding-left: 16px;
  }

  button {
    font-family: 'radnika_next', --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  p { font-weight: 300; }
  li { font-weight: 300;}

  a { cursor: pointer; }

  button { 
    padding: 0;
		background-color: transparent;
		border: none;
		color: inherit;
		cursor: pointer;
  }

  .imageConatiner {
    color: var(--gray);
    position: relative;
    display: inline-flex;
    vertical-align: middle;
    border: 2px solid var(--gray);
    width: 4.6rem;
    height: 4.6rem;
    border-radius: 50%;

    @media ${Devices.tablet} { text-align: center !important; display: block; margin:auto } 
  }
  .connectHeader {
    font-weight: 500;
    font-size: 18px;
    line-height: 2.8rem;
    position: relative;
    display: inline-block;
    right: -1%;
    width: 95%;
    @media ${Devices.tablet} { text-align: center; }
    &:after {
      position: absolute;
      content: '  ';
      width: 90%;
      top: 50%;
      right: 0;
      height: 1px;
      background-color: var(--lightGray);

      @media ${Devices.tablet} { display: none; }
    }
  }

  .card {
    background-color: var(--offWhite);
    border: 1px solid var(--lightGray);
    box-shadow: var(--bs);
    margin-top: 2em;
    padding: 1rem;
  }

  .btn {
    background-color: var(--gray);
    color: var(--offWhite);
    display: inline-block;
    text-decoration: none;
    padding: 7.5px 12.5px;
    svg {
      height: 24px;
      width: 24px;
      vertical-align: middle;
      margin-right: 10px;
    }

    &.blue {
      background-color: var(--blue);
      color: var(--white);

      &:hover { 
        background-color: var(--darkBlue);
        text-decoration: none;
        color: var(--white);
      }

      &.no-hover {
        background-color: var(--blue)
      }
    }
  }

  .hide-for-small {
    @media ${Devices.tablet} { display: none; }
  }
  
  .headerButtonContainer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    a {
      height: 46px;
      align-self: center;
    }
  }

  .NavHidden {  
    top: -200px; 
    position: sticky;
    transition: 0.5s;
  }

  .NavVisible {
    top: 0; 
    transition: 0.5s; 
    position: sticky;
    z-index: 3
  }

  .none { display:none; }
  hr {
    margin-top: 2.5em;
    height: 1px;
    background-color: var(--lightGray);
  }
  .contentContainer {
    animation: drop ease .75s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
  }
  .jumpContainer {
    animation: jump ease .75s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
  }
  @keyframes jump {
         0% {transform: translateY(200px) scaleY(0.9); opacity: 0;}
  5% {opacity: .7;}
  50% {transform: translateY(0px) scaleY(1); opacity: 1;}
  100% {transform: translateY(0px) scaleY(1); opacity: 1;}
  }
  @keyframes drop {
      from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
  }
`;

const InnerStyles = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;
  padding: 2rem;
  overflow: hidden;
`;

export default function Page({ children }) {
  const {
    asPath, // the value: "/question/how-do-you-get-the-current-url-in-nextjs/"
    pathname, // the value: "/question/[slug]"
  } = useRouter();

  const [scrollDisplay, setScrollDisplay] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrollDisplay(true);
    };
    if (!scrollDisplay) {
      window.addEventListener('scroll', handleScroll);
      window.addEventListener('click', handleScroll);
    }
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {asPath === '/' ? (
        <div>
          <GlobalStyles />
          <div className={!scrollDisplay ? 'none' : 'contentContainer'}>
            <Header />
          </div>
          <InnerStyles>{children}</InnerStyles>
          <div className={!scrollDisplay ? 'none' : 'jumpContainer'}>
            <Connect />
            <Footer />
          </div>
        </div>
      ) : (
        <div>
          <GlobalStyles />
          <Header />
          <InnerStyles>{children}</InnerStyles>
          <Connect />
          <Footer />
        </div>
      )}
    </>
  );
}

Page.propTypes = {
  children: PropTypes.node,
};
