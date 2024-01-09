/* eslint-disable import/no-unresolved */
import { JobStyles } from './Resume/styles';

import { ResumeProps } from './Types';

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
