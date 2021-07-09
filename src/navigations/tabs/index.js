import React from "react";
import { Dimensions } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
    MyOrders,
    Menu,
    Report,
    Inbox,
    Profile
} from "scenes";
import Icons from "./icons.json";
import { RFValue } from "react-native-responsive-fontsize";
import { Colors, Fonts } from "styles";
const { width } = Dimensions.get("window");
import { Icon } from "components";

const TabIcon = ({ routeName, focused, color, size }) => {
    let iconName = Icons[routeName];
    return (
        <Icon
            name={iconName.name}
            type={iconName.type}
            style={{ color: color, fontSize: iconName.size, marginTop: width * .01 }}
        />
    );
};

const BottomTab = createBottomTabNavigator();
const BottomTabNavigation = () => (
    <BottomTab.Navigator
        initialRouteName="MyOrders"
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                return (
                    <TabIcon
                        routeName={route.name}
                        focused={focused}
                        color={color}
                        size={size}
                    />
                );
            },
        })}
        tabBarOptions={{
            activeTintColor: Colors.PRIMARY,
            inactiveTintColor: "#CCCCCC",
            labelStyle: {
                fontFamily: Fonts.PMedium,
                marginTop: -5,
                textTransform: 'capitalize',
                fontSize: RFValue(10)
            },
            style: {
                height: width * .13,
                paddingBottom: width * .005,
                borderTopLeftRadius: width * .07,
                borderTopRightRadius: width * .07
            }
        }}
    >
        <BottomTab.Screen name="Pesanan" component={MyOrders} />
        <BottomTab.Screen name="Menu" component={Menu} />
        <BottomTab.Screen name="Laporan" component={Report} />
        <BottomTab.Screen name="Pesan" component={Inbox} />
        <BottomTab.Screen name="Profil" component={Profile} />
    </BottomTab.Navigator>
)

export default BottomTabNavigation;