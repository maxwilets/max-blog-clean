import styled from 'styled-components';

const YearSpacerStyles = styled.div`
  position: relative;

  @media (max-width: 960px) {
    display: none !important;
  }
  &:before {
    content: ' ';
    height: 43%;
    position: absolute;
    width: 3px;
    background-color: var(--lightGray);
    top: 63%;
    left: 25%;
    overflow-y: hide;
    z-index: 1;
  }

  &:after {
    content: ' ';
    height: 45%;
    position: absolute;
    width: 3px;
    background-color: var(--lightGray);
    top: 5.5%;
    left: 25%;
    z-index: 1;
    overflow-y: hidden;
  }
  p {
    background-color: var(--gray);
    color: var(--offWhite);
    padding: 20px;
    position: relative;
    left: -20px;
    top: 47.5%;
    z-index: 2;
    border-radius: 50%;
    box-shadow: var(--bs);
  }
`;

export default YearSpacerStyles;
