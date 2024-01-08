import styled from 'styled-components';

export const BreadcrumbsStyle = styled.div`
  .innactive {
    text-decoration: none;
    &:hover {
      text-decoration: none;
    }
  }

  .home {
    &:before {
      display: none;
    }
  }

  span {
    &:before {
      content: '/';
      text-decoration: none;
      padding: 0 5px;
    }
  }
`;
