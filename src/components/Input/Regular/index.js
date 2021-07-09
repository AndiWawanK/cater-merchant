import React, { useState } from 'react';
import { View, TextInput } from 'react-native';
import { Icon } from "components";
import styles from "./styles";
import { Colors } from "styles";

const Default = (props) => {
    const [isFocused, setFocused] = useState(false);
    return (
        <View style={styles.container(props.radius)}>
            {props.iconName !== '' && (
                <Icon name={props.iconName} type={props.iconType} style={styles.icon(isFocused)}/>
            )}
            <TextInput
                {...props}
                style={styles.input}
                placeholderTextColor={isFocused ? Colors.BLACK : Colors.BLACK_LIGHT}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
            />
        </View>
    )
}
Default.defaultProps = {
    radius: 75,
    iconName: ''
}
export default Default;