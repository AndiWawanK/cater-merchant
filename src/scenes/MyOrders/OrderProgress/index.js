import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, FlatList } from "react-native";
import styles from './styles';

const DATA = [
    {
        orderCode: 'VHGTA87542',
        orderHours: '05:00 pm',
        paketName: 'Paket Super Hemat - 1 minggu',
        paketInfo: 'Menunggu Konfirmasi',
        Date: '05 April 2020-11 April 2020'
    },
    {
        orderCode: 'VHGTA88178',
        orderHours: '09:00 pm',
        paketName: 'Paket Super Diet - 2 minggu',
        paketInfo: 'Menunggu Konfirmasi',
        Date: '01 April 2020-14 April 2020'
    },
    {
        orderCode: 'VHGTA88131',
        orderHours: '23:00 pm',
        paketName: 'Paket Super Diet - 2 bulan',
        paketInfo: 'Menunggu Konfirmasi',
        Date: '05 April 2020-05 Juni 2020'
    }
]

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
                        Date={item.Date}
                        onPress={() => navigation.navigate('DetailOrderProgress')}
                    />
                )}
            />
    )
}

export default OrderProgress