import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import { gql, useQuery } from "@apollo/client";
import CountryList from './countryList';
import DetatailsScreen from '../src/detailsScreen';

const GET_CONTINENTS = gql`
  query one {
    continents {
      code
      name
    }
  }
`;

const ContinentList = ({navigation}) => {
  const { loading, data, error } = useQuery(GET_CONTINENTS);
  const [selectedContinent, setselectedContinent] = useState();
  console.log(selectedContinent);
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <View style={{paddingTop:40, justifyContent:"center", alignItems:"center"}}>
        <Text style={{fontSize:20, fontWeight:"bold", color:"#4D648D"}}>CONTINENTS</Text>
      </View>
      {loading ? <ActivityIndicator /> : null}
      <FlatList
        keyExtractor={(item) => {
          item.code;
        }}
        showsVerticalScrollIndicator={false}
        data={data !== undefined ? data.continents : []}
        renderItem={({ item }) => (
          <View
            style={{
              height: 90,
              backgroundColor: "#E8E8E8",
              borderWidth: 0.1,
              borderRadius:20,
              border: 1,
              marginTop: 20,
              padding: 20,
              shadowColor: "black",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.3,
              shadowRadius: 3.84,
              elevation: 5,
              // borderRadius: 5,
              backgroundColor:"#D0E1F9",
              justifyContent:"center"
            }}
          >
            <Text style={{fontSize:20, color:"#4D648D"}}>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default ContinentList;
