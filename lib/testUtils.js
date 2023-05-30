import casual from 'casual';
import { PAGINATION_QUERY } from '../components/Pagination';

// seed it so we get consistent results
casual.seed(777);

const fakeItem = () => ({
  // __typename: 'Item',
  id: 'abc123',
  price: 5000,
  user: null,
  photo: {
    id: 'abc123',
    altText: 'dogs are best',
    image: {
      publicUrlTransformed: 'dog.jpg',
    },
  },
  name: 'dogs are best',
  description: 'dogs',
});

const fakeUser = (overrides) => ({
  __typename: 'User',
  id: '4234',
  name: casual.name,
  email: casual.email,
  permissions: ['ADMIN'],
  orders: [],
  cart: [],
  ...overrides,
});

const fakeOrderItem = () => ({
  __typename: 'OrderItem',
  id: casual.uuid,
  image: {
    image: `${casual.word}.jpg`,
  },
  name: casual.words(),
  price: 4234,
  quantity: 1,
  description: casual.words(),
});

const fakeOrder = () => ({
  __typename: 'Order',
  id: 'ord123',
  charge: 'ch_123',
  total: 40000,
  items: [fakeOrderItem(), fakeOrderItem()],
  createdAt: '2022-12-11T20:16:13.797Z',
  user: fakeUser(),
});

const fakeProject = () => ({
  __typename: 'Project',
  id: 'proj123',
  title: 'test project',
  p1: 'here is a testing project testing UI',
  p2: 'here is the second paragraph testing the UI for Project',
  repo: 'https://github.com/maxwilets',
  liveSite: 'https://maxwilets.io',
  photo: {
    altText: 'mountians',
    image: {
      publicUrlTransformed:
        'https://res.cloudinary.com/dsna4d0gs/image/upload/v1640028217/samples/landscapes/nature-mountains.jpg',
    },
  },
  technology: [
    {
      id: 'technology123',
      name: 'javascript',
      typeLink: 'https://javascript.com',
    },
    {
      id: 'technology1234',
      name: 'typescript',
      typeLink: 'https;//typescript.com',
    },
  ],
});

const fakeCartItem = (overrides) => ({
  __typename: 'CartItem',
  id: 'omg123',
  quantity: 3,
  product: fakeItem(),
  user: fakeUser(),
  ...overrides,
});

// Fake LocalStorage
class LocalStorageMock {
  constructor() {
    this.store = {};
  }

  clear() {
    this.store = {};
  }

  getItem(key) {
    return this.store[key] || null;
  }

  setItem(key, value) {
    this.store[key] = value.toString();
  }

  removeItem(key) {
    delete this.store[key];
  }
}

function makePaginationMocksFor(length) {
  return [
    {
      request: { query: PAGINATION_QUERY },
      result: {
        data: {
          _allProductsMeta: {
            count: length,
          },
          itemsConnection: {
            __typename: 'aggregate',
            aggregate: {
              count: length,
              __typename: 'count',
            },
          },
        },
      },
    },
  ];
}

export {
  makePaginationMocksFor,
  LocalStorageMock,
  fakeItem,
  fakeUser,
  fakeCartItem,
  fakeOrder,
  fakeOrderItem,
  fakeProject,
};
