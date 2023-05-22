import { CourseSyles } from './styles';

export default function Course({ course }) {
  return (
    <CourseSyles>
      <section className="header">
        <img
          alt={course.photo.alt}
          src={course.photo.image.publicUrlTransformed}
        />
        <h4>
          <a target="_blank" href={course.link} rel="noreferrer">
            {course.name}
          </a>
        </h4>
        <p>
          <b>
            {course.course} | {course.author}{' '}
          </b>
        </p>
      </section>

      <p>{course.description}</p>
    </CourseSyles>
  );
}
