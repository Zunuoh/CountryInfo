import React from "react";
import { Text, View, FlatList, ActivityIndicator } from "react-native";
import { gql, useQuery } from "@apollo/client";

const GET_COUNTRIES = gql`
  query countryList {
    countries {
      name
      native
      phone
      capital
      currency
      emoji
      languages {
        name
      }
    }
  }
`;

const CountryList = () => {
  const { loading, data, error } = useQuery(GET_COUNTRIES);
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          paddingTop: 40,
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>COUNTRIES</Text>
        <View style={{paddingTop:5}}>
        <Text style={{fontSize:20}}>Ever wanted information about the countries in the world? Well we've got you!</Text>
        </View>
        
      </View>
      {loading ? <ActivityIndicator /> : null}
      <FlatList
        keyExtractor={(item) => {
          item.code;
        }}
        showsVerticalScrollIndicator={false}
        data={data !== undefined ? data.countries : []}
        renderItem={({ item }) => (
          <View style={{ marginTop: 20 }}>
            <View
              style={{
                backgroundColor: "#D0E1F9",
                height: 100,
                padding: 10,
                borderRadius: 10,
              }}
            >
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                {item.name} {item.emoji}
              </Text>
              <Text style={{ marginTop: 5 }}>
                The capital city of {item.name} is <Text style={{fontWeight:"bold"}}>{item.capital}</Text>.{" "}
              </Text>
              <Text style={{ marginTop: 5 }}>
                The currency they spend is <Text style={{fontWeight:"bold"}}>{item.currency}</Text> and they speak{" "}
                <Text style={{fontWeight:"bold"}}>{item.languages.name}</Text>
              </Text>
            </View>
          </View>
          // console.log(item)
        )}
      />
    </View>
  );
};

export default CountryList;
