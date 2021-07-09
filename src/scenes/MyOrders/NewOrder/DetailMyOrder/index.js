import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Container, Header } from 'components';
import styles from "./styles";

const DetailMyOrder = ({ navigation }) => {
    return (
        <Container>
            <Header
                text="VHGTA87542"
                name="chevron-left"
                type="Feather"
                onPress={() => navigation.goBack()}
                back={true}
            />
            <ScrollView>
                <View style={styles.customerSection}>
                    <View style={styles.Time}>
                        <Text style={styles.noOrder}>VHGTA87542</Text>
                        <Text style={styles.textTime}>05:00 pm</Text>
                    </View>
                    <View style={styles.infoCustomer}>
                        <Image source={require("assets/profile.jpeg")} style={styles.avatar} />
                        <View style={styles.contactCustomer}>
                            <Text style={styles.nameCustomer}>Andi Firwansyah</Text>
                            <TouchableOpacity style={styles.contactButton}>
                                <Text style={styles.textContactButton}>Hubungi Customer</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.detailSection}>
                        <Text style={styles.textDetail}>Rincian Pesan </Text>
                        <View style={styles.imageSection}>
                            <Image source={require("assets/7-Rekomendasi-Jasa-Catering-Harian-Jogja-Enak-Murah-Emak-Emak-Pasti-Suka2.png")} style={styles.imageDetail} />
                            <View style={styles.paketSection}>
                                <Text style={styles.paketName}>Paket Hemat</Text>
                                <Text style={styles.textPaket}>Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.Price}>
                        <View style={styles.subTotal}>
                            <Text style={styles.textSubtotal}>Subtotal</Text>
                            <Text style={styles.textPriceSubTotal}>Rp130.000</Text>
                        </View>
                        <View style={styles.orderingFee}>
                            <Text style={styles.textOrdering}>Biaya Pemesanan</Text>
                            <Text style={styles.textPriceOrdering}>Rp2.000</Text>
                        </View>
                        <View style={styles.Line}></View>
                        <View style={styles.Total}>
                            <Text style={styles.textTotal}>Total</Text>
                            <Text style={styles.textPriceTotal}>Rp.132.000</Text>
                        </View>
                    </View>
                    <View style={styles.Notes}>
                        <Text style={styles.noteOrder}>Catatan Pesanan</Text>
                        <Text style={styles.textNotes}>Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.</Text>
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