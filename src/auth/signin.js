import React, { useState } from 'react';
import {View, Text, TextInput} from 'react-native';
import {Feather} from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

const SigninScreen = ({navigation}) =>{
    const[username, setUsername] = useState("");
    const[password, setPassword] = useState("");

    // const HandleLogin = () =>{
    //     (username =="" || password=="") ? alert("Success") : alert("Kindly fill all fields") 
    //     navigation.navigate("ContinentList");
    // }

    const handleLogin = () => {
        if (username == "" || password == "") {
          alert("Kindly fill all fields");
        } else {
          alert("Success");
          navigation.navigate("ContinentList");
        }
      };
    console.log(username)
    console.log(password)
    return(
        <View style={{flex:1, padding:20}}>
            <View style={{padding:30, paddingTop:100}}>
                <Text style={{fontSize:30, fontWeight:"bold"}}>Log in</Text>
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
                   value={username}
                   onChangeText={setUsername}
                //    textContentType="emailAddress"
                   clearTextOnFocus={true}
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
                   placeholder="Email"
                   value={password}
                   onChangeText={setPassword}
                //    textContentType="password"
                   clearTextOnFocus={true}
                   />
                    </View>
                </View>

                <View style={{flexDirection:"row", borderBottomWidth:1, padding:5, marginTop:40}}>
                    <View>
                        <Feather
                        name="phone"
                        size={24}
                        color="black"/>
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
                   value={password}
                   onChangeText={setPassword}
                //    textContentType="password"
                   clearTextOnFocus={true}
                   />
                    </View>
                </View>
            </View>

          

            <TouchableOpacity onPress={()=>handleLogin()} style={{height:50, marginTop:30, borderWidth:1, borderRadius:30, justifyContent:"center", alignItems:"center"}}>
                <Text style={{fontWeight:"bold", fontSize:20}}>SIGN UP</Text>
            </TouchableOpacity>

            <View style={{paddingTop:30, alignItems:"center"}}>
                <Text>Don't have an account?<Text style={{fontWeight:"bold"}} onPress={()=>{navigation.navigate('Signup')}}>Sign up</Text></Text>
            </View>
        </View>
    )
}

export default SigninScreen;