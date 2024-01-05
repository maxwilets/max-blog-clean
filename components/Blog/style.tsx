import styled from 'styled-components';
import { Devices } from '../Devices';

export const BlogStyle = styled.div`
  .cardContainer {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    @media ${Devices.tablet} {
      flex-direction: column;
      .card {
        max-width: 100% !important;
      }
    }

    .btn {
      margin-right: 1rem;
    }

    a {
      &:hover {
        text-decoration: none;
      }
    }

    .card {
      margin: 2rem 1rem;
      flex: 1 0 30%;
      max-width: 32%;
      padding: 2rem;
      &:hover,
      &:focus {
        transform: scale(0.95);
        background-color: darken(#fff, 2.5%) !important;
        cursor: pointer;
      }
    }
  }
`;
