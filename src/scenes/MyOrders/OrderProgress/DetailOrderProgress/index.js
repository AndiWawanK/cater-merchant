import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Header, Container, Icon } from 'components';

import styles from './styles';

const DetailOrderProgress = ({ navigation }) => {
    return (
        <Container>
            <Header
                text="VHGTA87542"
                name="chevron-left"
                type="Feather"
                onPress={() => navigation.goBack()}
                back={true}
            />
            <View style={styles.customerSection}>
                <View style={styles.Time}>
                    <Text style={styles.noOrder}>VHGTA87542</Text>
                    <Text style={styles.textTime}>05:00 pm</Text>
                </View>
                <View style={styles.infoCustomer}>
                    <Image source={require("assets/profile.jpeg")} style={styles.avatar} />
                    <View style={styles.contactCustomer}>
                        <Text style={styles.nameCustomer}>Andi Firwansyah</Text>
                        <Text style={styles.customerStatus}>Sedang Berlangsung</Text>
                        <Text style={styles.customerPaket}>1x Paket Hemat</Text>
                    </View>
                </View>
                <View style={styles.anotherSection}>
                    <View style={styles.btnSection}>
                        <TouchableOpacity style={styles.contactButton}>
                            <Text style={styles.textContactButton}>Hubungi Customer</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.Date}>05 April 2020 - 11 April 2020</Text>
                </View>
                <View style={styles.menuSchedule}>
                    <Text style={styles.textMenu}>Menu minggu ini</Text>
                    <TouchableOpacity style={styles.menuBtn}>
                        <Text style={styles.textMenuBtn}>Minggu pertama</Text>
                        <Icon 
                            name="chevron-down"
                            type="Feather"
                            style={styles.chevronDown}/>
                    </TouchableOpacity>
                </View>
                <ScrollView >
                    <View style={styles.Menu}>
                        <Image source={require('assets/detailOrder/unnamed1.png')} style={styles.menuImage} />
                        <View style={styles.infoMenu}>
                            <Text style={styles.Day}>Senin</Text>
                            <Text style={styles.foodMenu}>Nasi telur komplit</Text>
                        </View>
                        <View style={{ justifyContent: 'center' }}>
                            <Text style={styles.scheduleInfo}>Selesai</Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </Container>
    )
}

export default DetailOrderProgress;