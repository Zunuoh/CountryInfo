import React from 'react';
import {Text, View, FlatList, ActivityIndicator  } from 'react-native';
import {gql, useQuery} from "@apollo/client";

const GET_COUNTRIES = gql`
query countryList{
    countries{
      name
      native
      phone
      capital
      currency
      languages{
        name
      }
    }
  }
`



const CountryList = () =>{
    const [loading, data, error] = useQuery(GET_COUNTRIES)
    return(
        <View style={{flex:1, padding:20}}>
            <Text>tyrdckjhvbbvnbmnnv</Text>
        {/* {loading ? <ActivityIndicator/> : null} */}
        {/* <FlatList
        keyExtractor={(item) => {
            item.code;
          }}
          showsVerticalScrollIndicator={false}
        data={ data !== undefined ? data.countries : []}
        renderItem={({item})=>(
            <View style={{backgroundColor:"blue", width:50, height:50}}>
            <Text>jxkhbn </Text>
            </View>
        )}
         />
        */}
        </View>
        
    )
}

export default CountryList;