import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Icon } from "components";
import styles from "./styles";

const Header = (props) => {
    return (
        <View style={styles.Header}>
            {props?.back && (
                <TouchableOpacity onPress={props.onPress} style={styles.headerleft}>
                    <Icon name={props.name} type={props.type} style={styles.chevronLeft} />
                </TouchableOpacity>
            )}
            <Text style={styles.textHeader}>{props.text}</Text>
        </View>
    )
}

export default Header;