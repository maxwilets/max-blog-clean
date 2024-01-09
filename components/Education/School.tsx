/* eslint-disable import/no-unresolved */
import { SchoolProp } from '../Types';

export const School = ({ school }: { school: SchoolProp }): any => (
  <div className="schoolDiv">
    <h4>{school.title}</h4>
    <p className="large">
      <img
        src={school.photo[0]?.image?.publicUrlTransformed}
        alt={school.photo[0]?.altText}
      />
      {school.name}
    </p>
    <p className="large">{school.location}</p>
    <p className="large">{school.time}</p>
  </div>
);
