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
