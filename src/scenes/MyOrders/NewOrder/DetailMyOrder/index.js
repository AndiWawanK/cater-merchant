import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Container, Header } from 'components';
import { currencyFloat } from 'constants';
import styles from "./styles";
import moment from 'moment';
import AsyncStorage from '@react-native-async-storage/async-storage';

const DetailMyOrder = ({ navigation, route }) => {
    const [data, setData] = useState(route.params.data)

    return (
        <Container>
            <Header
                text={data.id}
                name="chevron-left"
                type="Feather"
                onPress={() => navigation.goBack()}
                back={true}
            />
            <ScrollView>
                <View style={styles.customerSection}>
                    <View style={styles.Time}>
                        <Text style={styles.noOrder}>{data.id}</Text>
                        <Text style={styles.textTime}>Expired in {moment(data.ends_at).format('HH:mm')}</Text>
                    </View>
                    <View style={styles.infoCustomer}>
                        <Image source={require("assets/profile.jpeg")} style={styles.avatar} />
                        <View style={styles.contactCustomer}>
                            <Text style={styles.nameCustomer}>{data.customer.full_name}</Text>
                            <TouchableOpacity style={styles.contactButton}>
                                <Text style={styles.textContactButton}>Hubungi Customer</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.detailSection}>
                        <Text style={styles.textDetail}>Rincian Pesan</Text>
                        <View style={styles.imageSection}>
                            <Image source={require("assets/7-Rekomendasi-Jasa-Catering-Harian-Jogja-Enak-Murah-Emak-Emak-Pasti-Suka2.png")} style={styles.imageDetail} />
                            <View style={styles.paketSection}>
                                <Text style={styles.paketName}>{data.packet.name}</Text>
                                <Text style={styles.textPaket}>{data.packet.description}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.Price}>
                        {/* <View style={styles.subTotal}>
                            <Text style={styles.textSubtotal}>Subtotal</Text>
                            <Text style={styles.textPriceSubTotal}>Rp130.000</Text>
                        </View> */}
                        {/* <View style={styles.orderingFee}>
                            <Text style={styles.textOrdering}>Biaya Pemesanan</Text>
                            <Text style={styles.textPriceOrdering}>Rp2.000</Text>
                        </View> */}
                        <View style={styles.Line}></View>
                        <View style={styles.Total}>
                            <Text style={styles.textTotal}>Total</Text>
                            <Text style={styles.textPriceTotal}>{currencyFloat(data.total_price)}</Text>
                        </View>
                    </View>
                    <View style={styles.Notes}>
                        <Text style={styles.noteOrder}>Catatan Pesanan</Text>
                        <Text style={styles.textNotes}>{data.note}</Text>
                    </View>
                    <TouchableOpacity style={styles.Btn}>
                        <Text style={styles.textBtn}>Terima Pesanan</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </Container>
    )
}

export default DetailMyOrder;