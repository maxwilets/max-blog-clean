import styled from 'styled-components';
import { Devices } from '../Devices';

export const PortfolioStyles = styled.div`
  margin-top: 5rem;

  .sideBySide {
    display: flex;
    flex-direction: row;
    @media ${Devices.tablet} {
      display: block;
      flex-direction: column;
      .imageContainer {
        display: block;
        width: 100% !important;
      }

      .contentContainer {
        display: block;
        width: 100% !important;
      }
    }
    .imageContainer {
      width: 35%;
      align-self: center;
      margin-right: 5rem;
      img {
        width: 100%;
      }
    }
    .contentContainer {
      width: 65%;
    }
  }

  .btn {
    flex: 1 0 15%;
    margin-right: 1rem;

    @media ${Devices.tablet} {
      margin-top: 1rem;
    }

    svg {
      transform: translate(5px, -2.5px);
      width: 16px;
      height: 16px;
    }
  }
`;
