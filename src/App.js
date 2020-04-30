import React from 'react';
import logo from './logo.svg';
import { ApolloProvider } from '@apollo/react-hooks';
import './App.css';
import client from './graphql/client';
import CountrySelect from './components/CountrySelect';
import CountrySelectPolicy from './components/CountrySelectPolicy';
import CountryDetails from './components/CountryDetails';

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <div>
          <h2> Welcome to Apollo</h2>
          <CountrySelect />
        </div>
        <div>
          <h4>With Fetch Policies</h4>
          <CountrySelectPolicy />
        </div>

        <div>
          <CountryDetails />
        </div>
      </div>
    </ApolloProvider>
  );
}

export default App;
