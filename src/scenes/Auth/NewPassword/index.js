import React from 'react';
import {View, Text, Image} from 'react-native';
import { Container, Input, Button } from 'components';
import styles from './styles';

const NewPassword = ({navigation}) => {
    return(
        <Container backgroundColor="#FFF">
            <View style={styles.vectorSection}>
                <Image source={require("assets/Ok-amico.png")} style={styles.forgotImage}/>
            </View>
            <View style={styles.formSection}>
                <Text style={styles.settingPass}>Verifikasi Berhasil</Text>
                <Text style={styles.settingPass}>Silahkan masukkan kata sandi baru kamu</Text>
                <Input 
                    mode="regular"
                    placeholder="Kata sandi baru"
                    iconName="ios-lock-closed-outline"
                    iconType="Ionicons"
                />
                <View style={styles.btnSection}>
                    <Button
                        title="Ubah Kata Sandi"
                        onPress={() => navigation.navigate('NewPassword')}
                    />
                </View>
            </View>
        </Container>
    );
}

export default NewPassword;