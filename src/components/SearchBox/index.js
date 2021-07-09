import React from 'react';
import { View, TextInput } from "react-native";
import styles from "./styles";
import { Colors } from "styles";
import { Icon } from "components";

const SearchBox = (props) => (
    <View style={styles.container}>
        <Icon name="search-outline" type="Ionicons" style={styles.searchIcon}/>
        <TextInput
            {...props}
            placeholderTextColor={Colors.BLACK_LIGHT}
            style={styles.input}
        />
    </View>
)

export default SearchBox;