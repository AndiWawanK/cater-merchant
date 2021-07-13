import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { useFocusEffect } from '@react-navigation/native';
import styles from './styles';
import { getIncomingOrder } from 'utils'; 
import moment from 'moment';

const Item = (props) => {
    return (
        <TouchableOpacity style={styles.Paket} onPress={props.onPress}>
            <View style={styles.Time}>
                <Text style={styles.noOrder}>{props.orderCode}</Text>
                <Text style={styles.textTime}>Expired in {props.orderHours}</Text>
            </View>
            <View style={styles.infoSection}>
                <Text style={styles.paketName}>{props.paketName}</Text>
                <Text style={styles.paketInfo}>Menunggu Diterima</Text>
            </View>
        </TouchableOpacity>
    )
}

const NewOrder = ({ navigation }) => {

    const [orders, setOrders] = useState([]);

    const getIncomingHandler = () => {
        getIncomingOrder().then((res) => {
            setOrders(res.data)
        }).catch((err) => {
            console.log(err);
        })
    }

    useFocusEffect(
        React.useCallback(() => {
            return getIncomingHandler();
        }, [])
    )

    return(
        <FlatList 
                data={orders}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) => (
                    <Item 
                        orderCode={item.id}
                        orderHours={moment(item.ends_at).format('DD-MM-YY HH:mm')}
                        paketName={`${item.packet.name} - ${item.subscription}`}
                        paketInfo={item.status}
                        onPress={() => navigation.navigate('DetailMyOrder', { data: item })} 
                    />
                )}
            />
    )
}

export default NewOrder