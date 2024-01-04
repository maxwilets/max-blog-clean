/* eslint-disable import/no-unresolved */
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { RoateWords } from '../components/RoateWords';
import Services from '../components/Services';
import RecentPosts from '../components/RecentPosts';

const IndexStyle = styled.div`
  .hero {
    animation: fadeInAnimation ease 3s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
  }
  @keyframes fadeInAnimation {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  .hidden {
    display: none;
  }

  .fadeIn {
    animation: jump ease 3s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
  }
  @keyframes fadeInAnimation {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes jump {
    0% {
      transform: translateY(200px) scaleY(0.9);
      opacity: 0;
    }
    5% {
      opacity: 0.7;
    }
    50% {
      transform: translateY(0px) scaleY(1);
      opacity: 1;
    }
    100% {
      transform: translateY(0px) scaleY(1);
      opacity: 1;
    }
  }
`;

export default function IndexPage() {
  const [scrollDisplay, setScrollDisplay] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrollDisplay(true);
    };
    if (!scrollDisplay) {
      window.addEventListener('click', handleScroll);
    }
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollDisplay]);
  return (
    <IndexStyle>
      <title>Max Wilets | Software Developer | 801-674-0992</title>

      <div className="hero">
        <RoateWords
          headerWords={[
            'a front end engineer',
            'a software engineer',
            ' a coding educator',
            'a passionate learner',
          ]}
        />
      </div>
      <p className={!scrollDisplay ? 'hidden' : 'fadeIn'}>
        Welcome to my portfolio website! I am an engineer with a passion for
        frontend and software engineering and love to learn. Throughout my
        career, I have had the opportunity to work on a diverse range of
        projects and collaborate with some amazing people. This website
        showcases some of my best work and highlights my skills and experience.
        Whether you're an employer, a potential client, or just curious about my
        work, I invite you to take alook around and learn more about me and what
        I have to offer.
      </p>
      <div className={!scrollDisplay ? 'hidden' : 'fadeIn'}>
        <Services />
      </div>
      {/* <RecentPosts /> */}
    </IndexStyle>
  );
}
