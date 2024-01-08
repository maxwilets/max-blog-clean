/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import PropTypes from 'prop-types';
import { useState } from 'react';
import { OpenLink } from '../../icons/OpenLink';
import { PortfolioStyles } from './style';
import { Minus } from '../../icons/Minus';
import { PlusIcon } from '../../icons/PlusIcon';

type PhotoProps = {
  altText: string;
  image: { publicUrlTransformed: string };
};

type TechnologyProps = {
  id: string;
  name: string;
  typeLink: string;
};

type PropjectProps = {
  id: string;
  title: string;
  liveSite: string;
  p1: string;
  p2: string;
  p3: string;
  repo: string;
  photo: PhotoProps;
  technology: TechnologyProps[];
};
export default function Project({
  projectData,
}: {
  projectData: PropjectProps;
}): any {
  const [toggleState, updateToggleState] = useState('plus');
  function toggle() {
    return toggleState === 'plus'
      ? updateToggleState('minus')
      : updateToggleState('plus');
  }
  return (
    <PortfolioStyles>
      <section className="sideBySide">
        <section className="imageContainer">
          <a target="_blank" href={projectData.liveSite} rel="noreferrer">
            <img
              src={projectData.photo.image.publicUrlTransformed}
              alt={projectData.photo.altText}
            />
          </a>
        </section>

        <section className="contentContainer">
          <h3>{projectData.title}</h3>
          <p>{projectData.p1}</p>
          {projectData.p2 ? <p>{projectData.p2}</p> : null}
          {projectData.p3 ? <p>{projectData.p3}</p> : null}
          {projectData.repo ? (
            <a
              className="btn blue"
              target="_blank"
              href={projectData.repo}
              rel="noreferrer"
            >
              Repository
              <OpenLink />
            </a>
          ) : null}
          {projectData.liveSite ? (
            <a
              className="btn blue"
              target="_blank"
              href={projectData.liveSite}
              rel="noreferrer"
            >
              Live Site
              <OpenLink />
            </a>
          ) : null}
        </section>
      </section>
      {projectData.technology.length > 0 ? (
        <>
          <a className="noDecoration" onClick={toggle}>
            <h3 className="technlogyHeader">
              <span className="toggleIcon">
                {toggleState === 'plus' ? <PlusIcon /> : <Minus />}
              </span>
              Technologies Used
            </h3>
          </a>
          <section
            className={
              toggleState === 'plus'
                ? 'btn-container hide'
                : 'btn-container show'
            }
          >
            {projectData.technology.map((techButton) => (
              <a
                href={techButton.typeLink}
                key={techButton.id}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                {techButton.name}
                <OpenLink />
              </a>
            ))}
          </section>
        </>
      ) : null}
    </PortfolioStyles>
  );
}

Project.propTypes = {
  projectData: PropTypes.object,
};
