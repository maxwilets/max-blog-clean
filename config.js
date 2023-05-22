// This is client side config only - don't put anything in here that shouldn't be public!
export const endpoint = `http://localhost:3000/api/graphql`;
export const prodEndpoint = `https://sea-lion-app-vvkdr.ondigitalocean.app/api/graphql`;
export const perPage = 2;
export const cors = {
  async rewrites() {
    return [
      {
        source: '/api/graphql:path*',
        destination: 'https://sea-lion-app-vvkdr.ondigitalocean.app/:path*',
      },
    ];
  },
};
