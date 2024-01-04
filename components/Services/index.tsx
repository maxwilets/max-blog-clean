/* eslint-disable import/no-unresolved */
import { EmailLogo } from '../../icons/EmailLogo';
import { ServiceLogo } from '../../icons/ServiceLogo';
import { ServicesStyles } from './styles';

export default function Services(): any {
  return (
    <>
      <ServicesStyles>
        <section className="header">
          <span className="imageConatiner">
            {' '}
            <ServiceLogo />
          </span>
          <p className="connectHeader">SERVICES</p>
        </section>
        <section className="servicesBody">
          <div className="servicesCard card">
            <h4>Web Development</h4>
            <p>
              This is my main service. With 5+ years of experience I can help
              building or optimizing websites
            </p>
            <button type="button" title="Email for web development services">
              <a
                href="mailto:mwilets@gmail.com?subject= Web Development Inquiry"
                className="btn"
              >
                <EmailLogo />
                Web Development
              </a>
            </button>
          </div>
          <div className="servicesCard card">
            <h4>Marketing Services</h4>
            <p>
              I can audit and optimize SEO performance and create nad manage
              paid search campaigns
            </p>
            <button title="Email for marketing services" type="button">
              <a
                href="mailto:mwilets@gmail.com?subject= Marketing Inquiry"
                className="btn"
              >
                <EmailLogo />
                Marketing
              </a>
            </button>
          </div>
          <div className="servicesCard card">
            <h4>Tutoring</h4>
            <p>
              With 3 years experience teaching and tutoring for web development
              I can tutor students or anyone curious about coding
            </p>
            <button type="button" title="Email for tutoring">
              <a
                href="mailto:mwilets@gmail.com?subject= Tutoring Inquiry"
                className="btn"
              >
                <EmailLogo />
                Tutoring
              </a>
            </button>
          </div>
        </section>
      </ServicesStyles>
    </>
  );
}
