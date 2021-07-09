import React from 'react';
import {View, Text, Image} from 'react-native';
import { Container, Input, Button } from 'components';
import styles from './styles';

const ForgotPassword = ({navigation}) => {
    return(
        <Container backgroundColor="#FFF">
            <View style={styles.vectorSection}>
                <Image source={require("assets/Forgot-password-cuate.png")} style={styles.forgotImage}/>
            </View>
            <View style={styles.formSection}>
                <Text style={styles.settingPass}>Masukkan alamat email kamu dibawah ini untuk mengatur ulang kata sandi</Text>
                <Input 
                    mode="regular"
                    placeholder="Email"
                    iconName="ios-mail-outline"
                    iconType="Ionicons"
                />
                <View style={styles.btnSection}>
                    <Button
                        title="Lupa Kata Sandi"
                        onPress={() => navigation.navigate('NewPassword')}
                    />
                </View>
            </View>
        </Container>
    );
}

export default ForgotPassword;