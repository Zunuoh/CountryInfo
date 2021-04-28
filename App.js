import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ContinentList from './src/continentList';
import CountryList from './src/continentList';
import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client';
import Navigation from './src/navigation/mainStack';

export default function App() {
  // const isLoadingComplete = useCachedResources();
  // const colorScheme = useColorScheme();
  const client = new ApolloClient({
    uri:"https://countries.trevorblades.com/",
    cache: new InMemoryCache()
  })

  
    return (
      <ApolloProvider client={client}>
       
          <Navigation/>
        {/* <ContinentList/> */}
      
      </ApolloProvider>
      // <CountryList/>  
  
     );
  }
 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
