import React from "react";
import {
  Text,
  View,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import { gql, useQuery } from "@apollo/client";
import {Feather} from '@expo/vector-icons';

const DetailsScreen = ({ navigation }) => {
  return (
    <View style={{ padding: 20, flex: 1, backgroundColor: "#D0E1F9" }}>
      <View style={{ paddingTop: 100 }}>
        <Text style={{ fontSize: 40 , color:"#4D648D"}}>Hey there! </Text>
        <Text style={{ fontSize: 30, color:"#4D648D" }}>We are glad to have you here :)</Text>
      </View>

      <View style={{ paddingTop: 20 }}>
        <Text style={{ fontSize: 20, color:"#4D648D" }}>
          Select any of the buttons below for more information. Enjoy!
        </Text>
      </View>

     <View style={{paddingTop:40, }}>
       <View style={{flexDirection:"row", height:90, width:"90%", alignItems:"center", padding:5, justifyContent:"center", borderBottomWidth:.5, marginLeft:40, borderBottomColor:"#A9A9A9"}}>
         <View style={{flex:8}}>
         <Feather
         name="globe"
         size={64}
         color="#4D648D"
         />
         </View>
         <View style={{marginLeft:30, flex:14}}>
            <Text style={{fontSize:30, color:"#4D648D"}}>Continents</Text>
         </View>
         <TouchableOpacity style={{paddingLeft:40, flex:4}} onPress={()=>{navigation.navigate('ContinentList')}}>
           <Feather
           name="chevron-right"
           size={24}
           color="#4D648D"
           />
         </TouchableOpacity>
       </View>
     </View>


     <View style={{paddingTop:40, }}>
       <View style={{flexDirection:"row", height:90, width:"90%", alignItems:"center", padding:5, justifyContent:"center", borderBottomWidth:.5, marginLeft:40, borderBottomColor:"#A9A9A9"}}>
         <View  style={{flex:8}}>
         <Feather
         name="home"
         size={64}
         color="#4D648D"
         />
         </View>
         <View style={{marginLeft:30, flex:14}}>
            <Text style={{fontSize:30, color:"#4D648D"}}>Countries</Text>
         </View>
         <TouchableOpacity style={{paddingLeft:40, flex:4}} onPress={()=>{navigation.navigate('CountryList')}}>
           <Feather
           name="chevron-right"
           size={24}
           color="#4D648D"
           />
         </TouchableOpacity>
       </View>
     </View>


     <View style={{paddingTop:40, }}>
       <View style={{flexDirection:"row", height:90, width:"90%", alignItems:"center", padding:5, justifyContent:"center", borderBottomWidth:1, marginLeft:40, borderBottomColor:"#A9A9A9"}}>
         <View style={{flex:8}}>
         <Feather
         name="bold"
         size={64}
         color="#4D648D"
         />
         </View>
         <View style={{marginLeft:30, flex:14}}>
            <Text style={{fontSize:30, color:"#4D648D"}}>Languages</Text>
         </View>
         <TouchableOpacity style={{paddingLeft:40, flex:4}} onPress={()=>{navigation.navigate('ContinentList')}}>
           <Feather
           name="chevron-right"
           size={24}
           color="#4D648D"
           />
         </TouchableOpacity>
       </View>
     </View>
    </View>
  );
};

export default DetailsScreen;
