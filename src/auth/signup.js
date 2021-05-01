import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import {Feather} from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

const SignupScreen = () =>{
    const[username, setUsername] = useState("");
    const[password, setPassword] = useState("");
    return(
        <View style={{flex:1, padding:20, backgroundColor:"#D0E1F9"}}>
            <View style={{padding:30, paddingTop:100}}>
                <Text style={{fontSize:30, fontWeight:"bold", color:"#4D648D"}}>Sign up</Text>
            </View>

            <View style={{padding:30}}>
                <View style={{flexDirection:"row", borderBottomWidth:1, padding:5, borderBottomColor:"#4D648D"}}>
                    <View>
                        <Feather
                        name="user"
                        size={24}
                        color="#4D648D"/>
                    </View>
                    <View style={{paddingLeft:10, paddingTop:6}}>
                    <TextInput
                   placeholder="Username"
                   />
                    </View>
                </View>

                <View style={{flexDirection:"row", borderBottomWidth:1, padding:5, marginTop:40, borderBottomColor:"#4D648D"}}>
                    <View>
                        <Feather
                        name="eye"
                        size={24}
                        color="#4D648D"/>
                    </View>
                    <View style={{paddingLeft:10, paddingTop:6}}>
                    <TextInput
                   placeholder="Password"
                   />
                    </View>
                </View>

                <View style={{flexDirection:"row", borderBottomWidth:1, padding:5, marginTop:40, borderBottomColor:"#4D648D"}}>
                    <View>
                        <Feather
                        name="phone"
                        size={24}
                        color="#4D648D"/>
                    </View>
                    <View style={{paddingLeft:10, paddingTop:6}}>
                    <TextInput
                   placeholder="Phone Number"
                   value={password}
                   onChangeText={setPassword}
                //    textContentType="password"
                   clearTextOnFocus={true}
                   />
                    </View>
                </View>

                <View style={{flexDirection:"row", borderBottomWidth:1, padding:5, marginTop:40, borderBottomColor:"#4D648D"}}>
                    <View>
                        <Feather
                        name="eye"
                        size={24}
                        color="#4D648D"/>
                    </View>
                    <View style={{paddingLeft:10, paddingTop:6}}>
                    <TextInput
                   placeholder="Password"
                   value={password}
                   onChangeText={setPassword}
                //    textContentType="password"
                   clearTextOnFocus={true}
                   />
                    </View>
                </View>
            </View>

           

            <TouchableOpacity style={{height:50, marginTop:30, borderRadius:30, justifyContent:"center", alignItems:"center", backgroundColor:"#4D648D"}}>
                <Text style={{fontWeight:"bold", fontSize:20, color:"#D0E1F9"}}>SIGN UP</Text>
            </TouchableOpacity>

            <View style={{paddingTop:30, alignItems:"center"}}>
                <Text style={{color:"#4D648D"}}>Already have an account?<Text style={{fontWeight:"bold"}}>Sign in</Text></Text>
            </View>
        </View>
    )
}

export default SignupScreen;