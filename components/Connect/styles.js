import styled from 'styled-components';

export const ConnectStyles = styled.div`
  max-width: 1100px;
  margin: auto;
  margin-bottom: 1em;
  padding: 2rem;
  .connectMain {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }

  .link {
    display: flex;
    flex-direction: column;
    line-height: 1.618em;
    text-align: center !important;
    font-weight: 600;

    .image {
      border-radius: 50%;
      line-height: 1em;
      display: inline-block;
      width: 46px;
      box-shadow: 0 2px #3a3a3a, -2px 0 #efefef, 2px 0 #e9e9e9, 0 -2px 0 #000;
      padding: 0.8rem;
      margin-bottom: 1rem;
    }
    svg {
      overflow: visible;
      font-size: 2em;
      width: 1em;
      height: 1em;
      font-size: 2em;
    }
  }
`;
