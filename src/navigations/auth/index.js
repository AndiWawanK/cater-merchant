import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { SignIn, ForgotPassword, NewPassword } from "scenes";

const AuthStack = createStackNavigator();
const AuthStackScreen = () => (
    <AuthStack.Navigator headerMode="none">
        <AuthStack.Screen name="SignIn" component={SignIn}/>
        <AuthStack.Screen name="ForgotPassword" component={ForgotPassword}/>
        <AuthStack.Screen name="NewPassword" component={NewPassword}/>
    </AuthStack.Navigator>
)

export default AuthStackScreen;