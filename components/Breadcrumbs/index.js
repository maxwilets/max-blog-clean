import { useRouter } from 'next/dist/client/router';
import { BreadcrumbsStyle } from './styles';

export default function Breadcrumbs({ url }) {
  const router = useRouter();
  const paths = router.pathname.split('/');
  paths.shift();
  if (url) {
    url.split('-').join(' ');
    paths.pop();
    paths.push(url);
  }

  return (
    <BreadcrumbsStyle>
      <a className="home" href="/">
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
            <a href={`/${path}`}>
              {path.charAt(0).toUpperCase() + path.slice(1)}
            </a>
          </span>
        )
      )}
    </BreadcrumbsStyle>
  );
}
