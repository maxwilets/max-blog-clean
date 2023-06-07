import Document, { Html, Head, Main, NextScript } from 'next/document';
import RoateWords from '../components/RoateWords';
import Services from '../components/Services';
import RecentPosts from '../components/RecentPosts';

export default function IndexPage({ query }) {
  return (
    <>
      <title>Max Wilets | Software Developer | 801-674-0992</title>

      <RoateWords />
      <p className="hello">
        Welcome to my portfolio website! I am an engineer with a passion for
        frontend and software engineering and love to learn. Throughout my
        career, I have had the opportunity to work on a diverse range of
        projects and collaborate with some amazing people. This website
        showcases some of my best work and highlights my skills and experience.
        Whether you're an employer, a potential client, or just curious about my
        work, I invite you to take alook around and learn more about me and what
        I have to offer.
      </p>
      <Services />
      <RecentPosts />
    </>
  );
}
