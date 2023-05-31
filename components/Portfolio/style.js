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
      margin-right: 5rem;
      margin-top: 2em;
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

  .toggleIcon {
    font-weight: 700;
    margin-right: 5px;
    svg {
      height: 24px;
      width: 24px;
      font-weight: 700;
      transform: translateY(5px);
    }
  }

  .hide {
    visibility: hidden;
    opacity: 0;
    transition: visibility 0s 0.25s, opacity 0.25s linear;
  }

  .show {
    animation: 0.5s reappear;
  }

  @keyframes reappear {
    0% {
      opacity: 0;
      transform: translateY(39px);
    }
    100% {
      transform: translateY(0);
    }
  }
  @keyframes disappear {
    0% {
      opacity: 1;
      transform: translateY(0);
    }
    100% {
      transform: translateY(-39px);
    }
  }
`;
