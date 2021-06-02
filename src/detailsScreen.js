import React from "react";
import {
  Text,
  View,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import { gql, useQuery } from "@apollo/client";

const DetailsScreen = ({ navigation }) => {
  return (
    <View style={{ padding: 20, flex: 1, backgroundColor: "#D0E1F9" }}>
      <View style={{ paddingTop: 100 }}>
        <Text style={{ fontSize: 40 }}>Hey there! </Text>
        <Text style={{ fontSize: 30 }}>We are glad to have you here :)</Text>
      </View>

      <View style={{ paddingTop: 20 }}>
        <Text style={{ fontSize: 20 }}>
          Select any of the buttons below for more information. Enjoy!
        </Text>
      </View>

      <TouchableOpacity onPress={()=>{navigation.navigate('ContinentList')}}
        style={{
          height: 80,
          backgroundColor: "#4D648D",
          marginTop: 40,
          width: 180,
          marginLeft: 90,
          borderWidth: 1,
          borderRadius: 90,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Continents</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>{navigation.navigate('CountryList')}}
        style={{
          height: 80,
          backgroundColor: "#4D648D",
          marginTop: 40,
          width: 180,
          marginLeft: 90,
          borderWidth: 1,
          borderRadius: 90,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Countries</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          height: 80,
          backgroundColor: "#4D648D",
          marginTop: 40,
          width: 180,
          marginLeft: 90,
          borderWidth: 1,
          borderRadius: 90,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Languages</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DetailsScreen;
