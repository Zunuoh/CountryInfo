import React from 'react';
import {Text, View, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native';
import {gql, useQuery} from "@apollo/client";



const DetailsScreen =({navigation})=>{
    
    return(
        <View style={{padding:20, flex:1}}>
           <TouchableOpacity style={{height:30, backgroundColor:"red", marginTop:40}} onPress={()=>navigation.navigate('ForgotPassword', {text:"first"})}>
             <Text>First</Text>
           </TouchableOpacity>

           <TouchableOpacity style={{height:30, backgroundColor:"blue", marginTop:40}}>
             <Text>First</Text>
           </TouchableOpacity>
        </View>
    )
}

export default DetailsScreen;