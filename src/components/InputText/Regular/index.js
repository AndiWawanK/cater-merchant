import React, { useState } from 'react';
import { View, TextInput, Text } from 'react-native';
import { Icon } from "components";
import styles from "./styles";
import { Colors } from "styles";

const Default = (props) => {
    const [isFocused, setFocused] = useState(false);
    return (
        <View>
            <View style={styles.descSection}>
                <Text style={styles.descInput}>{props.descInput}</Text>
                {props?.star && (
                    <Text style={styles.star}>*</Text>
                )}
                {props?.optional && (
                    <Text style={styles.optional}>(optional)</Text>
                )}
            </View>
                <View style={styles.container(props.radius)}>
                    <View style={styles.inputSection}>
                        <TextInput
                            {...props}
                            style={styles.input}
                            placeholderTextColor={isFocused ? Colors.BLACK : Colors.BLACK_LIGHT}
                            onFocus={() => setFocused(true)}
                            onBlur={() => setFocused(false)}
                        />
                    </View>
                </View>
            </View>
            )
}
            Default.defaultProps = {
                radius: 10,
            iconName: ''
}
            export default Default;