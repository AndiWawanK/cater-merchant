import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Container, Input, Button } from "components";
import styles from "./styles";

const SignIn = ({ navigation }) => {
    return (
        <Container backgroundColor="#FFF">
            <View style={styles.vectorSection}>
                <Image source={require("assets/cooking-cuate.png")} style={styles.cookingImage}/>
            </View>
            <View style={styles.formSection}>
                <Input
                    mode="regular"
                    placeholder="Email"
                    iconName="ios-person-outline"
                    iconType="Ionicons"
                />
                <Input
                    mode="regular"
                    placeholder="Password"
                    iconName="lock-closed-outline"
                    iconType="Ionicons"
                />
                <View style={styles.btnSection}>
                    <Button
                        title="Masuk"
                        onPress={() => navigation.navigate('App')}
                    />
                </View>
                <TouchableOpacity style={styles.forgotPassword} onPress={() => navigation.navigate("ForgotPassword")}>
                    <Text style={styles.forgotPasswordLable}>Lupa Kata Sandi?</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.footerSection}>
                <Text style={styles.dontHaveAccount}>Belum Punya Akun? </Text>
                <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                    <Text style={styles.dontHaveAccountRegister} >Daftar</Text>
                </TouchableOpacity>
            </View>
        </Container>
    )
}

export default SignIn;