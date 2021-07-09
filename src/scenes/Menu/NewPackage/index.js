import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Container, Header, InputText } from 'components';
import styles from './styles';


const NewPackage = ({ navigation }) => {
    return (
        <Container>
            <Header
                text="Buat Paket Baru"
                name="chevron-left"
                type="Feather"
                onPress={() => navigation.goBack()}
                back={true}
            />
            <View style={styles.bannerSection}>
                <View style={styles.imgSection}>
                    <Image source={require('assets/un.png')} style={styles.img} />
                </View>
                <View style={styles.textSection}>
                    <Text style={styles.textBanner}>Pasang Banner</Text>
                    <Text style={styles.desc}>Ini akan membantu anda untuk mendapatkan pelanggan</Text>
                </View>
            </View>
            <View style={styles.inputSection}>
                <View>
                    <View style={styles.input}>
                        <InputText
                            mode="regular"
                            descInput="Nama Paket"
                            placeholder="Tulis nama paket anda disini"
                            star={true}
                        />
                        <InputText
                            mode="regular"
                            descInput="Nama paket"
                            placeholder="Tulis nama paket anda disini"
                            star={true}
                        />
                        <InputText
                            mode="regular"
                            descInput="Diskon"
                            placeholder="0% "
                            optional={true}
                        />
                        <InputText
                            mode="regular"
                            descInput="Deskripsi"
                            placeholder="Deskripsi Paket"
                            star={true}
                        />
                        <InputText
                            mode="regular"
                            descInput="Jenis Paket"
                            placeholder="Mingguan"
                            star={true}
                        />
                        <TouchableOpacity style={styles.Btn}>
                            <Text style={styles.textBtn}>Terima Pesanan</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Container>
    )
}

export default NewPackage;