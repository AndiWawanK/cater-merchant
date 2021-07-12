import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import styles from './styles';
import { getIncomingOrder } from 'utils'; 
import moment from 'moment';

const DATA = [
    {
        orderCode: 'VHGTA87542',
        orderHours: '05:00 pm',
        paketName: 'Paket Super Hemat - 1 minggu',
        paketInfo: 'Menunggu Konfirmasi'
    },
    {
        orderCode: 'VHGTA88178',
        orderHours: '09:00 pm',
        paketName: 'Paket Super Diet - 2 minggu',
        paketInfo: 'Menunggu Konfirmasi'
    },
    {
        orderCode: 'VHGTA88178',
        orderHours: '09:00 pm',
        paketName: 'Paket Super Diet - 2 bulan',
        paketInfo: 'Menunggu Konfirmasi'
    },
    {
        orderCode: 'VHGTA88178',
        orderHours: '09:00 pm',
        paketName: 'Paket Super Diet - 2 tahun',
        paketInfo: 'Menunggu Konfirmasi'
    },
    {
        orderCode: 'VHGTA88178',
        orderHours: '09:00 pm',
        paketName: 'Paket Super Diet - 3 tahun',
        paketInfo: 'Menunggu Konfirmasi'
    },
]

const Item = (props) => {
    return (
        <TouchableOpacity style={styles.Paket} onPress={props.onPress}>
            <View style={styles.Time}>
                <Text style={styles.noOrder}>{props.orderCode}</Text>
                <Text style={styles.textTime}>{props.orderHours}</Text>
            </View>
            <View style={styles.infoSection}>
                <Text style={styles.paketName}>{props.paketName}</Text>
                <Text style={styles.paketInfo}>{props.paketInfo}</Text>
            </View>
        </TouchableOpacity>
    )
}

const NewOrder = ({ navigation }) => {

    const [orders, setOrders] = useState([]);

    const getIncomingHandler = () => {
        console.log('aoeaoe')
        getIncomingOrder().then((res) => {
            setOrders(res.data)
            console.log(res);
        }).catch((err) => {
            console.log(err);
        })
    }

    useEffect(() => {
        getIncomingHandler();
    })

    return(
        <FlatList 
                data={orders}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) => (
                    <Item 
                        orderCode={item.id}
                        orderHours={moment(item.ends_at).format('HH:mm')}
                        paketName={item.packet.name}
                        paketInfo={item.description}
                        onPress={() => navigation.navigate('DetailMyOrder')} 
                    />
                )}
            />
    )
}

export default NewOrder