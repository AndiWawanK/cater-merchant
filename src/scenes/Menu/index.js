import React from 'react';
import { View, Text, TouchableOpacity, Image, Dimensions } from 'react-native';
import { Container, Header, Icon } from 'components';
import styles from './styles';

const Item = () => {
    return (
        <View>

        </View>
    )
}

const Menu = ({ navigation }) => {
    return (
        <Container>
            <Header
                text="Daftar Menu"
                name="chevron-left"
                type="Feather"
                onPress={() => navigation.goBack()}
            />
            <View style={styles.newPackage}>
                <View style={styles.imgSection}>
                    <Image source={require('assets/logo.png')} style={styles.Img} />
                </View>
                <TouchableOpacity style={styles.klikNewPackage} onPress={() => navigation.navigate('PackageList')}>
                    <View style={styles.textSection}>
                        <Text style={styles.textNewPackage}>Buat Paket Baru</Text>
                        <Text style={styles.textNewDesc}>Kamu bisa menambah dan edit paket disini</Text>
                    </View>
                    <View style={styles.Right}>
                        <Icon name="right" type="AntDesign" />
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.packageList}>
                <Text style={styles.textList}>Daftar paket aktif</Text>
                <TouchableOpacity>
                    <Icon name="filter" type="AntDesign" style={styles.iconFilter} />
                </TouchableOpacity>
            </View>
            {/* <View style={styles.packageName}>
                <Image source={require("assets/7-Rekomendasi-Jasa-Catering-Harian-Jogja-Enak-Murah-Emak-Emak-Pasti-Suka2.png")} style={styles.imageDetail} />
                <View style={styles.paketSection}>
                    <Text style={styles.textName}>Paket Hemat</Text>
                    <Text style={styles.textPaket}>Reference site about Lorem Ipsum, giving informat on its origins, as well as a random Lipsum generator.</Text>
                </View>
                <View style={styles.editSection}>
                    <TouchableOpacity style={styles.btnUp}>
                        <Icon name="down" type="AntDesign" style={styles.iconUP} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.textEdit}>Edit</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.Line}></View>
            <View style={styles.Menu}>
                <Image source={require('assets/detailOrder/unnamed1.png')} style={styles.menuImage} />
                <View style={styles.infoMenu}>
                    <Text style={styles.Day}>Senin</Text>
                    <Text style={styles.foodMenu}>Nasi telur komplit</Text>
                </View>
            </View> */}
        </Container>
    )
}

export default Menu;