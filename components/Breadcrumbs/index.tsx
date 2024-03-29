import PropTypes from 'prop-types';
import { useRouter } from 'next/dist/client/router';
// eslint-disable-next-line import/no-unresolved
import { BreadcrumbsStyle } from './styles';

type UrlProps = {
  url?: string;
};

export default function Breadcrumbs(props: UrlProps): any {
  const { url } = props;
  const router = useRouter();
  const paths = router.pathname.split('/');
  paths.shift();
  if (url) {
    const path = url.split('-').join(' ');
    paths.pop();
    if (path) {
      paths.push(path);
    }
  }

  return (
    <BreadcrumbsStyle>
      <a
        className="home"
        aria-label="Naviagte to home"
        href="/"
        title="Navigate to home"
      >
        Home
      </a>

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
              title={`Go to ${path === '/' ? 'Home' : path}`}
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

Breadcrumbs.propTypes = {
  url: PropTypes.string,
};
