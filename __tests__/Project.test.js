import { render, screen } from '@testing-library/react';
import { MockedProvider } from '@apollo/react-testing';
import Project from '../components/Portfolio/Project';
import { fakeProject } from '../lib/testUtils';

const project = fakeProject();

describe('<Project/>', () => {
  it('renders out the description title technologies and image', () => {
    const { container, debug } = render(
      <MockedProvider>
        <Project projectData={project} />
      </MockedProvider>
    );
    const description = screen.getByText(project.p1);
    debug(description);
    expect(description).toBeInTheDocument();
    const link = container.querySelector('a');
    debug(link);
    expect(link).toHaveAttribute('href', 'https://github.com/maxwilets');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveTextContent('Repository');
  });

  it('Renders and matches the snapshot', () => {
    const { container, debug } = render(
      <MockedProvider>
        <Project projectData={project} />
      </MockedProvider>
    );
    expect(container).toMatchSnapshot();
  });

  it('renders the image properly', () => {
    const { container, debug } = render(
      <MockedProvider>
        <Project projectData={project} />
      </MockedProvider>
    );
    // grab the image
    const img = screen.getByAltText(project.photo.altText);
    expect(img).toBeInTheDocument();
    debug(img);
  });
});
