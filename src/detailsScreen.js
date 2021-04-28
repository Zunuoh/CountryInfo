import React from 'react';
import {View, Text} from 'react-native';

const DetailsScreen =()=>{
    return(
        <View style={{padding:20, flex:1}}>
            <View style={{marginTop:30, justifyContent:"center", alignItems:"center"}}>
            <Text style={{fontSize:30, fontWeight:"bold"}}>COUNTRIES</Text>
            </View>
            <View style={{height:180, backgroundColor:"blue", marginTop:30, borderWidth:.5, borderRadius:20}}>
                <Text></Text>
            </View>
          
        </View>
    )
}

export default DetailsScreen;