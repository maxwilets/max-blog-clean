import PropTypes from 'prop-types';

import { JobStyles } from './Resume/styles';

type ResumeProps = {
  id: string;
  title: string;
  company: string;
  startYear: string;
  endYear: string;
  date: string;
  role1: string;
  role2: string;
  role3?: string;
  role4?: string;
  role5?: string;
};

// $year={resume.endYear ? resume.endYear : resume.startYear}

export default function Job({ resume }: { resume: ResumeProps }) {
  return (
    <JobStyles>
      <h4>{resume.title}</h4>
      <h5>{resume.company}</h5>
      <p>{resume.date}</p>
      <ul>
        <li>{resume.role1}</li>
        <li>{resume.role2}</li>
        <li>{resume.role3}</li>
        <li>{resume.role4}</li>
        <li>{resume.role5}</li>
      </ul>
    </JobStyles>
  );
}
