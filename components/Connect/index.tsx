import React from 'react';
import { ConnectIcon } from '../../icons/ConnectIcon';
import { GithubIcon } from '../../icons/GithubIcon';
import LinkedInIcon from '../../icons/LinkedInIcon';
import { MailIcon } from '../../icons/MailIcon';
import { ConnectStyles } from './styles';

export const Connect = (): React.ReactNode | any => (
  <ConnectStyles>
    <section className="header">
      <span className="imageConatiner">
        {' '}
        <ConnectIcon />
      </span>
      <p className="connectHeader">CONNECT</p>
    </section>
    <section className="connectMain">
      <button type="button" title="Go to github">
        <a
          className="link"
          href="https://www.github.com/maxwilets"
          target="_blank"
          rel="noreferrer"
          aria-label="Go to github"
        >
          <div className="image">
            <GithubIcon />
          </div>
          GitHub
        </a>
      </button>
      <button type="button" title="Go to Linkedin">
        <a
          className="link"
          href="https://www.linkedin.com/in/maxwell-wilets-7aa205139/"
          target="_blank"
          rel="noreferrer"
          aria-label="Go to Linkedin"
        >
          <div className="image">
            <LinkedInIcon />
          </div>
          LinkedIn
        </a>
      </button>
      <button type="button" title="Email me">
        <a
          className="link"
          href="mailto:mwilets@gmail.com"
          aria-label="Email me"
        >
          <div className="image">
            <MailIcon />
          </div>
          Email
        </a>
      </button>
    </section>
  </ConnectStyles>
);
