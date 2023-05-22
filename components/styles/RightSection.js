import styled from 'styled-components';
import { Devices } from '../Devices';

export const RightSection = styled.div`
  margin-left: 25px;
  width: 40%;

  @media ${Devices.tablet} {
    width: 90%;
    margin: auto;
  }
`;
