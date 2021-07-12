import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Container, Input, Button } from "components";
import styles from "./styles";
import { login } from "utils";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SignIn = ({ navigation }) => {
    const [state, setState] = useState({
        email: '',
        password: ''
    });

    const inputHandler = (text, type) => {
        if(type == 'email') {
            setState(prevState => ({
                ...prevState,
                email: text
            }))
        } else {
            setState(prevState => ({
                ...prevState,
                password: text
            }));
        }
    }

    const loginHandler = () => {
        login({
            email: state.email,
            password: state.password
        }).then( async (res) => {
            if(res.status == 200) {
                await AsyncStorage.setItem('token', res.data.access_token);
                navigation.navigate('App');
            } else {
                alert('Password / Email Tidak Ditemukan')
            }
        }).catch((err) => {
            console.log(err);
        })
    }

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
                    onChangeText={(val) => inputHandler(val, 'email')}
                    value={state.email}
                />
                <Input
                    mode="regular"
                    placeholder="Password"
                    iconName="lock-closed-outline"
                    iconType="Ionicons"
                    onChangeText={(val) => inputHandler(val, 'password')}
                    value={state.password}
                />
                <View style={styles.btnSection}>
                    <Button
                        title="Masuk"
                        onPress={() => { 
                            loginHandler()
                        }}
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