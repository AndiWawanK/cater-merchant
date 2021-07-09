import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTab from "../tabs";
import { DetailMyOrder, DetailOrderProgress, PackageList, NewPackage } from "scenes";

const AppStack = createStackNavigator();
const AppStackScreen = () => (
    <AppStack.Navigator headerMode="none">
        <AppStack.Screen name="MyOrders" component={BottomTab}/>
        <AppStack.Screen name="DetailMyOrder" component={DetailMyOrder}/>
        <AppStack.Screen name="DetailOrderProgress" component={DetailOrderProgress}/>
        <AppStack.Screen name="PackageList" component={PackageList}/>
        <AppStack.Screen name="NewPackage" component={NewPackage}/>
    </AppStack.Navigator>
)

export default AppStackScreen;