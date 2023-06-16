import { ApolloClient, InMemoryCache, HttpLink, makeVar } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

// Create a reactive variable to hold the token
export const token = makeVar<string | null>(null);
export const isLoggedInVar = makeVar(Boolean(token));

const httpLink = new HttpLink({
  uri:
    process.env.NODE_ENV === 'production'
      ? 'https://transport-dev-bootstrap-ts-next.vercel.app/'
      : 'http://localhost:85/graphql',
});

const authLink = setContext((_, { headers }) => {
  // Retrieve the token from the reactive variable
  const authToken = token();

  return {
    headers: {
      ...headers,
      'x-jwt': localStorage.getItem('token'),
    },
  };
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          isLoggedIn: {
            read() {
              return isLoggedInVar();
            },
          },
          token: {
            read() {
              return authToken();
            },
          },
        },
      },
    },
  }),
});
function authToken(): any {
  throw new Error('Function not implemented.');
}
