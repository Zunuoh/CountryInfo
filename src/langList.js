import React from 'react';
import { View, FlatList, ActivityIndicator, Text } from 'react-native';
import { gql, useQuery } from "@apollo/client";
import { useState } from 'react/cjs/react.development';

const GET_LANGUAGES = gql`
query languageNames{
    languages{
      name
      native
    }
  }

`

const LanguageList =() =>{
    const {loading, data, error} = useQuery(GET_LANGUAGES);
    const [selectedLanguages, setSelectedLanguages] = useState();
    return(
        <View>
            {loading ? <ActivityIndicator /> : null}
            <View style={{paddingTop:50, justifyContent:"center", alignItems:"center", paddingBottom:20}}>
              <Text style={{fontSize:20}}>LANGUAGES</Text>
            </View>
      <FlatList
        keyExtractor={(item) => {
          item.code;
        }}
        showsVerticalScrollIndicator={false}
        data={data !== undefined ? data.languages : []}
        renderItem={({ item }) => (
          <View style={{ marginTop: 20}}>
            <View
              style={{
                backgroundColor: "#D0E1F9",
                height: 80,
                padding: 10,
                borderRadius: 10,
                width:"90%",
                marginLeft:20
              }}
            >
              <Text style={{ fontSize: 20, fontWeight: "bold", color:"#4D648D" }}>
                Name : {item.name} 
              </Text>
              <Text style={{ marginTop: 10, color:"#4D648D"}}>
                Native : {item.native}
              </Text>
              {/* <Text style={{ marginTop: 5, color:"#4D648D"}}>
                The currency they spend is <Text style={{fontWeight:"bold"}}>{item.currency}</Text> and they speak{" "}
                <Text style={{fontWeight:"bold"}}>{item.languages.name}</Text>
              </Text> */}
            </View>
          </View>
          // console.log(item)
        )}
      />
        </View>
    )
}

export default LanguageList;