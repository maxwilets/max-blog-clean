/* eslint-disable import/no-unresolved */
import PropTypes from 'prop-types';

import { CourseSyles } from './styles';
import { CourseProps } from '../Types';

export default function Course({ course }: { course: CourseProps }): any {
  return (
    <CourseSyles>
      <section className="header">
        <img
          alt={course.photo.altText}
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
