import React, { useEffect } from 'react';
import {View, Text, Image, ActivityIndicator} from 'react-native';
import { Container, Input, Button } from 'components';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Loading = ({navigation}) => {

    const checkToken = async () => {
        let token = await AsyncStorage.getItem('token');
        if(token == null) {
            navigation.navigate('SignIn');
        } else {
            navigation.navigate('App');
        }
    }

    useEffect(() => {
        checkToken();
    })

    return(
        <Container backgroundColor="#FFF">
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <ActivityIndicator size="large" color="#ffd422" />
            </View>
        </Container>
    );
}

export default Loading;