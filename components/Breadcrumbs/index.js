import { useRouter } from 'next/dist/client/router';
import { BreadcrumbsStyle } from './styles';

export default function Breadcrumbs() {
  const router = useRouter();
  const paths = router.pathname.split('/');
  paths.shift();
  console.log(paths);

  return (
    <BreadcrumbsStyle>
      <a className="home" href="/">
        Home
      </a>
      {paths.map((path, i) =>
        i + 1 === paths.length ? (
          <span key={i}>
            <a className="innactive">{path}</a>
          </span>
        ) : (
          <span key={i}>
            <a href={`/${path}`}>{path}</a>
          </span>
        )
      )}
    </BreadcrumbsStyle>
  );
}
