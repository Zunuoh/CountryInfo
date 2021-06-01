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
    const {loading, data, error} = useQuery(GET_COUNTRIES)
    return(
        // <View style={{flex:1, padding:20}}>
        //   <View style={{justifyContent:"center", alignItems:"center", paddingTop:30}}>
        //         <Text style={{fontSize:20, fontWeight:"bold"}}>COUNTRIES</Text>
        //       </View>
        // {loading ? <ActivityIndicator/> : null}
        // <FlatList
        // keyExtractor={(item) => {
        //     item.code;
        //   }}
        //   showsVerticalScrollIndicator={false}
        // data={ data !== undefined ? data.countries : []}
        // renderItem={({item})=>(
        //     <View style={{marginTop:20}}>    
        //     <View style={{backgroundColor:"#D0E1F9", height:70, padding:10, borderRadius:10}}>
        //     <Text style={{fontSize:20, fontWeight:"bold"}}>Country:{item.name} </Text>
        //     <Text>Capital:{item.capital} </Text>
        //     <Text>Currency:{item.currency}</Text>
        //     </View>
        //     </View>
        // )}
        //  />
       
        // </View>

        <View style={{flex:1, padding:20}}>
        <View style={{justifyContent:"center", alignItems:"center", paddingTop:30}}>
              <Text style={{fontSize:20, fontWeight:"bold"}}>COUNTRIES</Text>
            </View>
      {loading ? <ActivityIndicator/> : null}
      <FlatList
      keyExtractor={(item) => {
          item.code;
        }}
        showsVerticalScrollIndicator={false}
      data={ data !== undefined ? data.countries : []}
      renderItem={({item})=>(
          <View style={{marginTop:20}}>    
          <View style={{backgroundColor:"#D0E1F9", height:100, padding:10, borderRadius:10}}>
          <Text style={{fontSize:20, fontWeight:"bold"}}>Country:{item.name} </Text>
          <Text style={{fontSize:20, marginTop:5}}>The capital city of {item.name} is {item.capital}. </Text>
          <Text style={{marginTop:5}}>The currency they spend is {item.currency} and they speak {item.languages.fname}</Text>
          </View>
          </View>
      )}
       />
     
      </View>
        
    )
}

export default CountryList;