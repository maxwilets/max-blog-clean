import styled from 'styled-components';

const NavStyles = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  justify-self: end;
  font-size: 1.7rem;
  a,
  button {
    padding: 0.5rem 2rem;
    display: flex;
    align-items: center;
    position: relative;
    margin-right: 1rem;
    color: var(--offWhite);
    text-transform: uppercase;
    font-weight: 900;
    font-size: 1em;
    background: none;
    border: 0;
    cursor: pointer;
    border-radius: 5px;
    text-decoration: none;
    a {
      text-decoration: none;
    }
    @media (max-width: 700px) {
      font-size: 10px;
      padding: 0 10px;
      margin-right: 0;
    }
    // &:before {
    //   content: '';
    //   width: 2px;
    //   background: var(--offWhite);
    //   height: 100%;
    //   left: 0;
    //   position: absolute;
    //   transform: skew(-20deg);
    //   top: 0;
    //   bottom: 0;
    // }
    // &:after {
    //   height: 2px;
    //   background: red;
    //   content: '';
    //   width: 0;
    //   position: absolute;
    //   transform: translateX(-50%);
    //   transition: width 0.4s;
    //   transition-timing-function: cubic-bezier(1, -0.65, 0, 2.31);
    //   left: 50%;
    //   margin-top: 2rem;
    // }
    &:hover,
    &:focus {
      outline: none;
      background: var(--offWhite);
      text-decoration: none;
      color: var(--gray);
      transition-duration: 500ms;
      &:after {
        width: calc(100% - 60px);
      }
      @media (max-width: 700px) {
        width: calc(100% - 10px);
      }
    }
  }
  @media (max-width: 1300px) {
    border-top: 1px solid var(--lightGray);
    width: 100%;
    justify-content: center;
    font-size: 1.5rem;
  }
`;

export default NavStyles;
