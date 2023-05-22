import styled from "styled-components";
import { Devices } from "../Devices";

const ResumeStyles = styled.div`
  display: flex;
  flex-direction: row;

  @media ${Devices.tablet} {
    flex-direction: column !important;
    .job-section {
      max-width: 90%;
      margin: auto;
    }
  }

  .jobSection {
    max-width: 60%;

    @media ${Devices.tablet} {
      max-width: 90%;
      margin: auto;
    }
  }

  .headers {
    display: flex;
    flex-direction: row-reverse;
    h3 {
      margin-left: 10px;
    }
  }

  h4 {
    font-size: 24px;
  }

  h5 {
    font-size: 20px;
  }

  .large {
    font-size: 18px;
    font-weight: 600;
  }

  .yearHeader {
    background-color: #fff;
    height: fit-content;
    text-align: center;
    padding: 15px 20px;
    display: inline-block;
    transform: translateX(-19px) translateY(17.5px);
    border-radius: 50%;
    border: 2px solid #000;
    position: relative;
    box-shadow: var(--bs);

    @media (max-width: 960px) {
      display: none;
    }

    &:after {
      content: " ";
      height: 100%;
      top: 102.5%;
      left: 46%;
      width: 3px;
      background-color: var(--lightGray);
      position: absolute;
    }

    svg {
      vertical-align: bottom;
    }
  }
  .bottomSpacer {
    width: 100%;
    height: 12px;
    background-color: var(--gray);
    transform: translateY(20px);
    z-index: 2;
    position: relative;

    @media ${Devices.laptop} {
      display: none;
    }
  }
`;

const JobStyles = styled.div`
  border: 1px solid var(--lightGray);
  padding: 16px 5%;
  border-radius: 5px;
  margin-top: 5rem;
  position: relative;
  box-shadow: var(--bs);

  :first-of-type {
    margin-top: -10px;
  }
`;

const JobWrapper = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
`;

export { ResumeStyles, JobStyles, JobWrapper };
