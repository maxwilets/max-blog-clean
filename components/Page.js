import PropTypes from 'prop-types';
import styled, { createGlobalStyle } from 'styled-components';
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
  }
`;

const InnerStyles = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;
  padding: 2rem;
  overflow: hidden;
`;

export default function Page({ children, cool }) {
  return (
    <div>
      <GlobalStyles />
      <Header />
      <InnerStyles>{children}</InnerStyles>
      <Connect />
      <Footer />
    </div>
  );
}

Page.propTypes = {
  children: PropTypes.any,
};
