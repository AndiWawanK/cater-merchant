import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, FlatList } from "react-native";
import styles from './styles';
import { getProgressOrder } from 'utils';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Item = (props) => {
    return (
        <TouchableOpacity style={styles.Paket} onPress={props.onPress}> 
            <View style={styles.Time}>
                <Text style={styles.noOrder}>{props.orderCode}</Text>
                <Text style={styles.textTime}>{props.orderHours}</Text>
            </View>
            <Text style={styles.paketName}>{props.paketName}</Text>
            <View style={styles.infoSection}>
                <Text style={styles.paketInfo}>{props.paketInfo}</Text>
                <Text style={styles.Date}>{props.Date}</Text>
            </View>
        </TouchableOpacity>
    )
}

const OrderProgress = ({navigation}) => {

    const [order, setOrder] = useState({})

    const handleGetProgressOrder = async () => {
        getProgressOrder().then((res) => {
            setOrder(res.data);
        }).catch((err) => { 
            console.log(err);
        })
    }

    useEffect(() => {
        handleGetProgressOrder();
    }, [])

    return(
            <FlatList 
                data={order}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) => (
                    <Item 
                        orderCode={item.id}
                        orderHours={item.ends_at}
                        paketName={item.packet.name}
                        paketInfo={item.status}
                        Date={item.Date}
                        onPress={() => navigation.navigate('DetailOrderProgress')}
                    />
                )}
            />
    )
}

export default OrderProgress