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
import isEqual from 'lodash/isEqual';

// Config
import config from '@Config/index';

export const APOLLO_STATE_PROP_NAME = '__APOLLO_STATE__';

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

    const data = merge(initialState as any, existingCache, {
      arrayMerge: (destinationArray, sourceArray) => [
        ...sourceArray,
        ...destinationArray.filter((d) =>
          sourceArray.every((s) => !isEqual(d, s))
        ),
      ],
    });

    _apolloClient.cache.restore(data);
  }

  if (!apolloClient) apolloClient = _apolloClient;

  return _apolloClient;
}

export function addApolloState(
  client: ApolloClient<NormalizedCacheObject>,
  pageProps: any
): any {
  if (pageProps?.props) {
    pageProps.props[APOLLO_STATE_PROP_NAME] = client.cache.extract();
  }

  console.log(pageProps);
  return pageProps;
}

export function useApollo(pageProps: any): ApolloClient<NormalizedCacheObject> {
  const state = pageProps[APOLLO_STATE_PROP_NAME];
  const store = useMemo(() => initilizeApollo(state), [state]);
  return store;
}
