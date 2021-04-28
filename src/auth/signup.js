import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {Feather} from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

const SignupScreen = () =>{
    return(
        <View style={{flex:1, padding:20}}>
            <View style={{padding:30, paddingTop:100}}>
                <Text style={{fontSize:30, fontWeight:"bold"}}>Sign up</Text>
            </View>

            <View style={{padding:30}}>
                <View style={{flexDirection:"row", borderBottomWidth:1, padding:5}}>
                    <View>
                        <Feather
                        name="user"
                        size={24}
                        color="black"/>
                    </View>
                    <View style={{paddingLeft:10, paddingTop:6}}>
                    <TextInput
                   placeholder="Username"
                   />
                    </View>
                </View>

                <View style={{flexDirection:"row", borderBottomWidth:1, padding:5, marginTop:40}}>
                    <View>
                        <Feather
                        name="eye"
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

            <View style={{justifyContent:"space-between", flexDirection:"row"}}>
            <Text/>
            <Text style={{fontSize:20, fontWeight:"700"}}>Forgot password?</Text>
            </View>

            <TouchableOpacity style={{height:50, marginTop:30, borderWidth:1, borderRadius:30, justifyContent:"center", alignItems:"center"}}>
                <Text style={{fontWeight:"bold", fontSize:20}}>SIGN UP</Text>
            </TouchableOpacity>

            <View style={{paddingTop:30, alignItems:"center"}}>
                <Text>Already have an account?<Text style={{fontWeight:"bold"}}>Sign in</Text></Text>
            </View>
        </View>
    )
}

export default SignupScreen;