import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Container, Icon, Header } from 'components';
import styles from "./styles";
import NewOrder from "./NewOrder";
import OrderProgress from "./OrderProgress";

const MyOrders = ({navigation}) => {
    const [tabActive, setTabActive] = useState(0)

    return(
        <Container>
            <Header 
            text="Pesanan Masuk"
            name="chevron-left" 
            type="Feather"
            />
            <View style={styles.tabHeader}>
                <View style={styles.tabContainer(tabActive === 0)}>
                    <TouchableOpacity onPress={() => setTabActive(0)}>
                        <Text style={styles.tabTitle(tabActive === 0)}>Pesanan Masuk</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.tabContainer(tabActive === 1)}>
                    <TouchableOpacity onPress={() => setTabActive(1)}>
                        <Text style={styles.tabTitle(tabActive === 1)}>Pesanan Berlangsung</Text>
                    </TouchableOpacity>
                </View>
            </View>
            {tabActive === 0 ? (
                <NewOrder navigation={navigation} />
            ):(
                <OrderProgress navigation={navigation} />
            )}
        </Container>
    )
}

export default MyOrders;