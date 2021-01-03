/**
 * https://geonlee.tistory.com/222
 * https://github.com/vercel/next.js/blob/canary/examples/with-apollo/lib/apolloClient.js
 */
// Dependencies
import { useMemo } from 'react';
import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client';
import merge from 'deepmerge';

// Config
import config from '@Config/index';

let apolloClient: ApolloClient<NormalizedCacheObject>;

function createApolloClient(): ApolloClient<NormalizedCacheObject> {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: new HttpLink({
      uri: config.serverUrl,
      credentials: 'same-origin',
    }),
    cache: new InMemoryCache(),
  });
}

export function initilizeApollo(
  initialState = null
): ApolloClient<NormalizedCacheObject> {
  const _apolloClient = apolloClient ?? createApolloClient();
  if (initialState) {
    const existingCache = _apolloClient.extract();

    const data = merge(initialState as any, existingCache);

    _apolloClient.cache.restore(data);
  }

  if (typeof window === 'undefined') return _apolloClient;
  if (!apolloClient) apolloClient = _apolloClient;

  return _apolloClient;
}

export function useApollo(
  initialState = null
): ApolloClient<NormalizedCacheObject> {
  const store = useMemo(() => initilizeApollo(initialState), [initialState]);
  return store;
}
