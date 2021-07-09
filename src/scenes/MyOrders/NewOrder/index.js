import React from 'react';
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import styles from './styles';

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
    return(
        <FlatList 
                data={DATA}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) => (
                    <Item 
                        orderCode={item.orderCode}
                        orderHours={item.orderHours}
                        paketName={item.paketName}
                        paketInfo={item.paketInfo}
                        onPress={() => navigation.navigate('DetailMyOrder')} 
                    />
                )}
            />
    )
}

export default NewOrder