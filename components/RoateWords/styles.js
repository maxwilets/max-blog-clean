import styled from 'styled-components';
import { Devices } from '../Devices';

export const RotateStyles = styled.div`
  position: relative;
  padding-top: 0.9375rem; // 15px
  margin-bottom: 0;
  margin-top: 0;
  font-weight: 300;
  font-size: 3.2rem;
  line-height: 1.35em;
  font-family: $font-family-base;
  text-transform: none;
  color: $dark;
  font-weight: 300;
  text-align: center;
  margin: 0 auto;
  @media ${Devices.tablet} {
    font-size: 1.5rem;
    line-height: 1.8rem;
  }

  span {
    @media ${Devices.tablet} {
      min-width: 18.4375rem; // 295px
    }
    &.rotate-in {
      @media ${Devices.tablet} {
        line-height: 2.125rem; // 34px
      }
    }
  }

  .rotate-words {
    line-height: 2.125rem;
    display: inline-block;
    // min-width: 28.5rem;
    min-width: 38%;
    text-align: left;
    @media ${Devices.tablet} {
      min-width: 18.4375rem;
      line-height: 1.375rem;
    }
    span {
      font-size: inherit;
      display: inline-block;
      position: absolute;
      font-weight: 300;
      margin: auto;
      opacity: 1;
      &.active {
        opacity: 1;
        animation: 0.5s reappear;
        font-weight: 700;
      }

      &.fading {
        opacity: 0;
        animation: 0.5s disappear;
      }

      &:not(.active):not(.fading) {
        opacity: 0;
      }
    }
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
