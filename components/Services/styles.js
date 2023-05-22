import styled from 'styled-components';
import { Devices } from '../Devices';

export const ServicesStyles = styled.div`
  max-width: 1100px;
  margin: auto;
  margin-bottom: 1em;
  padding: 2rem 0 !important;
  .header {
    width: 100%;
    @media ${Devices.tablet} {
      text-align: center;
    }
  }

  .servicesBody {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;

    @media ${Devices.tablet} {
      flex-direction: column;
    }
  }

  .servicesCard {
    width: 30%;
    text-align: center;

    @media ${Devices.tablet} {
      width: 100%;
    }
  }
`;
