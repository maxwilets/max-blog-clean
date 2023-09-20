import PropTypes from 'prop-types';

export default function School({ school }) {
  return (
    <div className="schoolDiv">
      <h4>{school.title}</h4>
      <p className="large">
        <img
          src={school.photo[0]?.image?.publicUrlTransformed}
          alt={school.photo.altText}
        />
        {school.name}
      </p>
      <p className="large">{school.location}</p>
      <p className="large">{school.time}</p>
    </div>
  );
}

School.propTypes = {
  school: PropTypes.objectOf({
    title: PropTypes.string,
    photo: PropTypes.node,
    location: PropTypes.string,
    time: PropTypes.string,
  }),
};
