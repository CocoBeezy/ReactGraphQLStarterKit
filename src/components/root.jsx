import React, { Component } from 'react';
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { Router } from 'react-router';
import routes from './routes';

const networkInterface = createNetworkInterface({
  uri: 'http://localhost:3090/graphql', // GraphQL Server uri goes here
  opts: {
    credentials: 'same-origin'
  }
});

const client = new ApolloClient({
  networkInterface,
  dataIdFromObject: o => o.id
});

export default class Root extends Component {
  render() {
    const { history } = this.props;

    return (
      <ApolloProvider client={client}>
        <Router history={ history } routes={ routes }/>
      </ApolloProvider>
    )
  }
}
