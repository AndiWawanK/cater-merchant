import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Container, Icon } from 'components';
import styles from "./styles";

const SETTING_CHOICES = [
    {
        name: 'Langganan',
        icon: 'storefront-outline',
        type: 'MaterialCommunityIcons'
    },
    {
        name: "Restoran",
        icon: "restaurant-outline",
        type: "Ionicons"
    },
    {
        name: 'Pusat Bantuan',
        icon: 'loader',
        type: 'Feather'
    },
    {
        name: 'Tentang Aplikasi',
        icon: 'info',
        type: 'Feather'
    },
    {
        name: 'Beri Masukan',
        icon: 'award',
        type: 'Feather'
    }
]

const Profile = ({ navigation }) => {
    return (
        <Container>
            <View style={styles.headersection}>
                <View style={styles.headerprofile}>
                    <Image source={require("assets/7-Rekomendasi-Jasa-Catering-Harian-Jogja-Enak-Murah-Emak-Emak-Pasti-Suka2.png")} style={styles.avatar}/>
                    <View style={styles.userinformation}>
                        <Text style={styles.username}>Warung Pak Magi</Text>
                        <Text style={styles.userphone}>+62 8975 2435 819</Text>
                        <TouchableOpacity style={styles.btnedit} onPress={() => navigation.navigate('ProfileEdit')}>
                            <Text style={styles.profiledit}>Edit Profil</Text>
                            <Icon name="chevron-right" type="Feather" style={styles.chevronright}/>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            {SETTING_CHOICES.map((item, index) => (
                <TouchableOpacity style={styles.settinglist(index === 0)} key={index}> 
                    <Icon name={item.icon} type={item.type} style={styles.settingicon}/>
                    <Text style={styles.settinglable}>{item.name}</Text>
                    <Icon name="chevron-right" type="Feather" style={styles.chevronlist}/>
                </TouchableOpacity>
            ))}
            <Text style={styles.appversion}>Cater V0.0.1.2020</Text>
        </Container>
    )
}

export default Profile;