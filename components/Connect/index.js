import { ConnectIcon } from '../../icons/ConnectIcon';
import { GithubIcon } from '../../icons/GithubIcon';
import LinkedInIcon from '../../icons/LinkedInIcon';
import { MailIcon } from '../../icons/MailIcon';
import { ConnectStyles } from './styles';

export default function Connect() {
  return (
    <ConnectStyles>
      <section className="header">
        <span className="imageConatiner">
          {' '}
          <ConnectIcon />
        </span>
        <p className="connectHeader">CONNECT</p>
      </section>
      <section className="connectMain">
        <a
          className="link"
          href="https://www.github.com/maxwilets"
          target="_blank"
          rel="noreferrer"
        >
          <div className="image">
            <GithubIcon />
          </div>
          GitHub
        </a>
        <a
          className="link"
          href="https://www.linkedin.com/in/maxwell-wilets-7aa205139/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="image">
            <LinkedInIcon />
          </div>
          LinkedIn
        </a>
        <a className="link" href="mailto:mwilets@gmail.com">
          <div className="image">
            <MailIcon />
          </div>
          Email
        </a>
      </section>
    </ConnectStyles>
  );
}
