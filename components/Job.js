import PropTypes from 'prop-types';

import { JobStyles } from './Resume/styles';

export default function Job({ resume }) {
  return (
    <JobStyles $year={resume.endYear ? resume.endYear : resume.startYear}>
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

Job.propTypes = {
  resume: PropTypes.objectOf({
    title: PropTypes.string,
    company: PropTypes.string,
    endYear: PropTypes.string,
    startYear: PropTypes.string,
    role1: PropTypes.string,
    role2: PropTypes.string,
    role3: PropTypes.string,
    role4: PropTypes.string,
    role5: PropTypes.string,
  }),
};
