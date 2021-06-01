import React, { useState } from 'react';
import {View, Text, TextInput} from 'react-native';
import {Feather} from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import SigninSvg from '../../components/SVGs/SigninSvg';

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
        <View style={{flex:1, padding:20, backgroundColor:"#D0E1F9"}}>
           <View style={{width:150, height:150,  display:"flex",  marginTop:80, marginLeft:120}}>
           <SigninSvg/>
           </View> 
            <View style={{padding:30, paddingTop:50}}>
                <Text style={{fontSize:30, fontWeight:"bold", color:"#4D648D"}}>Sign in</Text>
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
                   value={username}
                   onChangeText={setUsername}
                //    textContentType="emailAddress"
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
                   placeholder="Email"
                   value={password}
                   onChangeText={setPassword}
                //    textContentType="password"
                   clearTextOnFocus={true}
                   />
                    </View>
                </View>

                

               
            </View>

            <View style={{justifyContent:"space-between", flexDirection:"row", paddingTop:30}}>
            <Text/>
            <TouchableOpacity onPress={()=>{navigation.navigate('ForgotPassword')}}>
            <Text style={{fontSize:20, fontWeight:"700", color:"#4D648D"}}>Forgot password</Text>
            </TouchableOpacity>
            
            </View>

          

            <TouchableOpacity onPress={()=>{navigation.navigate('ContinentList')}} style={{height:50, marginTop:30, borderRadius:30, justifyContent:"center", alignItems:"center", backgroundColor:"#4D648D"}}>
                <Text style={{fontWeight:"bold", fontSize:20, color:"#D0E1F9"}}>SIGN IN</Text>
            </TouchableOpacity>

            <View style={{paddingTop:30, alignItems:"center"}}>
                <Text style={{color:"#4D648D"}}>Don't have an account?<Text style={{fontWeight:"bold", color:"#4D648D"}} onPress={()=>{navigation.navigate('Signup')}}>Sign up</Text></Text>
            </View>
        </View>
    )
}

export default SigninScreen;