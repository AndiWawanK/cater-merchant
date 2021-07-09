import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./styles";
import { Icon } from "components";

const FoodCard = (props) => {
    const { items, onPress } = props;
    return (
        items.map((item, index) => (
            <TouchableOpacity onPress={onPress} style={styles.container(items.length - 1 === index)} key={index}>
                <Image source={item.thumbnail} resizeMode="cover" style={styles.thumbnail}/>
                <View style={styles.content}>
                    <Text numberOfLines={1} style={styles.owner}>{item.owner}</Text>
                    <View style={styles.starSection}>
                        <Icon name="star" type="AntDesign" style={styles.starIcon}/>
                        <Text style={styles.starTotal}>{item.star}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        ))
    )
}

export default FoodCard;