import React , {Fragment}from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import CountryList from '../countryList';
import ContinentList from '../continentList';
import DetailsScreen from '../detailsScreen';
import SigninScreen from '../auth/signin';
import ForgotPassword from '../auth/forgotpassword';
import SignupScreen from '../auth/signup';
const Stack = createStackNavigator();

const MainStackNavigator = () =>{
    return(
        <Fragment>
            <NavigationContainer>
            <Stack.Navigator screenOptions={{
          headerShown: false,
        }}>
            <Stack.Screen name="Signin" component={SigninScreen}/>
            <Stack.Screen name="ForgotPassword" component={ForgotPassword}/>
            <Stack.Screen name="Signup" component={SignupScreen}/>
            {/* <Stack.Screen name="ContinentList" component={ContinentList}/>
            <Stack.Screen name="CountryList" component={CountryList}/>
            <Stack.Screen name="DetailsScreen" component={DetailsScreen}/> */}
           
            </Stack.Navigator>
            </NavigationContainer>
           
        </Fragment>
    )
}

export default MainStackNavigator;

