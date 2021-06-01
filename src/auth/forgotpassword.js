import React from 'react';
import {View, Text, TextInput} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {Feather} from '@expo/vector-icons';
// import Picker from 'react-native-picker-select';

const PassOptions = [
    {item:'Username', id: 'user'}, {item:'Password', id:'pass'}
]

const ForgotpasswordScreen = ({route}) =>{
    return(
        <View style={{flex:1, padding:20}}>
        <View style={{padding:30, paddingTop:100}}>
            <Text style={{fontSize:30, fontWeight:"bold"}}>Oops, forgotten your password?</Text>
        </View>

        <View style={{justifyContent:"center", alignItems:"center"}}>
        <Text style={{fontSize:20}}>Enter your email or phone number</Text>
        </View>

        {/* <Picker>
            <Picker.Item label="Username" value="username"/>
        </Picker> */}

        <View style={{padding:30,paddingTop:50}}>
            <Text style={{fontSize:16}}>How do you want to verify your account?</Text>
            <View style={{ borderWidth:1, padding:6, borderRadius:10, marginTop:10}}>

                <View style={{paddingLeft:10, paddingTop:6}}>
                <TextInput
               placeholder="Username"
               />
                </View>
            </View>
            

            <View style={{flexDirection:"row", borderBottomWidth:1, padding:5, marginTop:40}}>
                <View>
                    <Feather
                    name="user"
                    size={24}
                    color="black"/>
                </View>
                <View style={{paddingLeft:10, paddingTop:6}}>
                <TextInput
               placeholder="Password"
               />
                </View>
            </View>
        </View>

        <TouchableOpacity style={{height:50, marginTop:30, borderWidth:1, borderRadius:30, justifyContent:"center", alignItems:"center"}}>
            <Text style={{fontWeight:"bold", fontSize:20}}>RETRIEVE</Text>
        </TouchableOpacity>
    </View>
    )
}

export default ForgotpasswordScreen;