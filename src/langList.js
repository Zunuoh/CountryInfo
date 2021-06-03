import React from 'react';
import { View } from 'react-native';
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
              <Text style={{ fontSize: 20, fontWeight: "bold", color:"#4D648D" }}>
                {item.name} {item.emoji}
              </Text>
              <Text style={{ marginTop: 5, color:"#4D648D"}}>
                The capital city of {item.name} is <Text style={{fontWeight:"bold"}}>{item.capital}</Text>.{" "}
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