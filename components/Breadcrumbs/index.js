import { useRouter } from 'next/dist/client/router';
import { BreadcrumbsStyle } from './styles';

export default function Breadcrumbs({ url }) {
  const router = useRouter();
  const paths = router.pathname.split('/');
  paths.shift();
  if (url) {
    const path = url.split('-').join(' ');
    paths.pop();
    paths.push(path);
  }

  return (
    <BreadcrumbsStyle>
      <button title="Go to home" type="button">
        <a className="home" href="/">
          Home
        </a>
      </button>

      {paths.map((path, i) =>
        i + 1 === paths.length ? (
          <span key={i}>
            <a className="innactive">
              {path.charAt(0).toUpperCase() + path.slice(1)}
            </a>
          </span>
        ) : (
          <span key={i}>
            <button
              type="button"
              title={`Go to ${path === '/' ? 'Home' : title}`}
            >
              {' '}
              <a href={`/${path}`}>
                {path.charAt(0).toUpperCase() + path.slice(1)}
              </a>
            </button>
          </span>
        )
      )}
    </BreadcrumbsStyle>
  );
}
