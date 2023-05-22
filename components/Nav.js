import Link from 'next/link';
import NavStyles from './styles/NavStyles';

export default function Nav() {
  return (
    <NavStyles>
      <Link href="/resume">Resume</Link>
      <Link href="/portfolio">Portfolio</Link>
      <Link href="/blog">Blog</Link>
    </NavStyles>
  );
}
