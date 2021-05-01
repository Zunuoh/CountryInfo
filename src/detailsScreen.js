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

const DetailsScreen =()=>{
    // const [loading, data, error] = useQuery(GET_COUNTRIES)
    const {loading, data, error} = useQuery(GET_COUNTRIES)
    return(
        <View style={{padding:20, flex:1}}>
            <View style={{marginTop:30, justifyContent:"center", alignItems:"center"}}>
            <Text style={{fontSize:30, fontWeight:"bold"}}>COUNTRIES</Text>
            <Text>shskxlks</Text>
            </View>
            <View style={{height:180, backgroundColor:"blue", marginTop:30, borderWidth:.5, borderRadius:20}}>
                <Text></Text>
            </View>
          
        </View>
    )
}

export default DetailsScreen;