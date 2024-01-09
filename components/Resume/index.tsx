/* eslint-disable import/no-unresolved */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';
import DisplayError from '../ErrorMessage';
import H3Style from '../styles/Typography';
import { JobWrapper, ResumeStyles } from './styles';
import Job from '../Job';
import YearSpacer from '../YearSpacer';
import { Briefcase } from '../../icons/Briefcase';
import { ResumeProps } from '../Types';
import Skills from '../Skills';
import Eductation from '../Education';
import { RightSection } from '../styles/RightSection';
import Coursework from '../Coursework';

export const ALL_JOBS_QUERY = gql`
  query ALL_JOBS_QUERY {
    resumes(orderBy: { startYear: desc }) {
      id
      title
      company
      startYear
      endYear
      date
      role1
      role2
      role3
      role4
      role5
    }
  }
`;

export default function Resume(): any {
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch('MaxWiletsResume.pdf').then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        const alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = 'MaxWiletsResume.pdf';
        alink.click();
      });
    });
  };

  const { data, error, loading } = useQuery(ALL_JOBS_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <DisplayError error={error} />;
  const { resumes } = data;

  return (
    <>
      <div className="headerButtonContainer">
        {' '}
        <h1>Resume </h1>
        <a onClick={onButtonClick} className="btn blue hide-for-small">
          Download CV
        </a>
      </div>

      <ResumeStyles>
        <section className="jobSection">
          <section className="headers">
            <H3Style>Work History</H3Style>
            <span className="yearHeader">
              <Briefcase />
            </span>
          </section>
          {resumes.map((resume: ResumeProps) => (
            <JobWrapper key={resume.id}>
              <YearSpacer
                years={resume.endYear ? resume.endYear : resume.startYear}
              />
              <Job resume={resume} />
            </JobWrapper>
          ))}
          <section className="bottomSpacer" />
        </section>
        <RightSection>
          <Skills />
          {/* <Eductation /> */}
          <Coursework />
        </RightSection>
      </ResumeStyles>
    </>
  );
}
