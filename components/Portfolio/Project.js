import { OpenLink } from '../../icons/OpenLink';
import { PortfolioStyles } from './style';

export default function Project({ projectData }) {
  return (
    <PortfolioStyles>
      <section className="sideBySide">
        <section className="imageContainer">
          <img
            src={projectData.photo.image.publicUrlTransformed}
            alt={projectData.photo.altText}
          />
        </section>

        <section className="contentContainer">
          <h3>{projectData.title}</h3>
          <p>{projectData.p1}</p>
          {projectData.p2 ? <p>{projectData.p2}</p> : null}
          {projectData.p3 ? <p>{projectData.p3}</p> : null}
          {projectData.repo ? (
            <a
              className="btn"
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
              className="btn"
              target="_blank"
              href={projectData.liveSite}
              rel="noreferrer"
            >
              Repository
              <OpenLink />
            </a>
          ) : null}
        </section>
      </section>
      <h3>Technologies Used</h3>
      <section className="btnContainer">
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
    </PortfolioStyles>
  );
}
