import PropTypes from 'prop-types';
import { useState } from 'react';
import { OpenLink } from '../../icons/OpenLink';
import { PortfolioStyles } from './style';
import { Minus } from '../../icons/Minus';
import { PlusIcon } from '../../icons/PlusIcon';

export default function Project({ projectData }) {
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
          <h3 className="technlogyHeader" onClick={toggle}>
            <span className="toggleIcon">
              {toggleState === 'plus' ? <PlusIcon /> : <Minus />}
            </span>
            Technologies Used
          </h3>
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
