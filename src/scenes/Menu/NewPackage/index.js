import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, Alert } from 'react-native';
import { Container, Header, InputText } from 'components';
import { launchImageLibrary } from 'react-native-image-picker';
import { createPacket, updatePacket } from 'utils';
import styles from './styles';
import { BASE_URL } from 'constants';

const NewPackage = ({ navigation, route }) => {
    const [state, setState] = useState({
        imageOpt: {
            fileUri: route.params?.data ? BASE_URL + route.params.data.thumbnail : '',
            file: ''
        },
        packageName: route.params?.data ?  route.params.data.name :  '',
        price: route.params?.data ? route.params.data.price :  '',
        discount: route.params?.data ? route.params.data.discount : '',
        desc: route.params?.data ? route.params.data.description : '',
        status: route.params?.data ? route.params.data.status : ''
    })
    const [filledForm, setFilledForm] = useState(false)

    const imagePickerHandler = () => {
        launchImageLibrary({
            quality: 0.5
        }, (res) => {
            setState(prevState => ({
                ...prevState,
                imageOpt: {
                    fileUri: res.assets[0].uri,
                    file: {
                        uri: res.assets[0].uri,
                        type: res.assets[0].type,
                        name: res.assets[0].fileName
                    }
                }
            }))
        })
    }

    const handleInput = (val, stateName) => {
        setState(prevState => ({
            ...prevState,
            [stateName]: val
        }))
    }

    const handleSubmitPacket = () => {
        let formData = new FormData();
        if(state.imageOpt.file != '') {
            formData.append('banner', state.imageOpt.file)
        }
        formData.append('packet_name', state.packageName)
        formData.append('packet_price', state.price)
        formData.append('discount', state.discount == '' ? 0 : state.discount)
        formData.append('description', state.desc)

        if(route.params?.data) {
            const { id } = route.params.data;
            updatePacket(id, formData).then(res => {
                // console.log(res)
                if(res.status == 200) {
                    Alert.alert(
                        'Success',
                        'Update Paket Berhasil',
                        [
                            {
                                text: "Ok",
                                onPress: () => navigation.goBack(),
                                // style: "cancel",
                            },
                        ]
                    )
                } else {
                    alert('Terjadi Kesalahan')
                }
            }).catch(err => {
                console.log(err)
            })
        } else {
            createPacket(formData).then((res) => {
                if(res.status == 201) {
                    alert('Pembuatan Paket Berhasil')
                    navigation.navigate('PackageList')
                } else {
                    alert('Terjadi Kesalahan');
                }
            }).catch((err) => {
                console.log(err)
            })
        }
    }


    const isFilled = () => {
        if(
            state.desc             != '' &&
            state.packageName      != '' &&
            state.price            != ''
        ) {
            setFilledForm(true);
        } else {
            setFilledForm(false)
        }
    }

    useEffect(() => {
        isFilled();
    }, [state])

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
                    <TouchableOpacity onPress={() => imagePickerHandler()}>
                        <Image source={state.imageOpt.fileUri == '' ? require('assets/un.png') : {uri: state.imageOpt.fileUri}} style={state.imageOpt.fileUri == '' ? styles.img : { width: 77, height: 77, borderRadius: 15 }} />
                    </TouchableOpacity>
                </View>
                <View style={styles.textSection}>
                    <Text style={styles.textBanner}>Pasang Banner</Text>
                    <Text style={styles.desc}>Ini akan membantu anda untuk mendapatkan pelanggan<Text style={{ color: 'red' }}>*</Text></Text>
                </View>
            </View>
            <View style={styles.inputSection}>
                <View>
                    <View style={styles.input}>
                        <InputText
                            mode="regular"
                            descInput="Nama Paket"
                            placeholder="Tulis nama paket anda disini"
                            onChangeText={(val) => handleInput(val, 'packageName')}
                            value={state.packageName}
                            star={true}
                        />
                        <InputText
                            mode="regular"
                            keyboardType='number-pad'
                            descInput="Harga Paket"
                            placeholder="10.00000"
                            star={true}
                            value={state.price}
                            onChangeText={(val) => handleInput(val, 'price')}
                        />
                        <InputText
                            mode="regular"
                            keyboardType="number-pad"
                            descInput="Diskon"
                            placeholder="0% "
                            optional={true}
                            value={state.discount}
                            onChangeText={(val) => handleInput(val, 'discount')}
                        />
                        <InputText
                            mode="regular"
                            descInput="Deskripsi"
                            placeholder="Deskripsi Paket"
                            star={true}
                            value={state.desc}
                            onChangeText={(val) => handleInput(val, 'desc')}
                        />
                    </View>
                </View>
                <View style={{ paddingTop: 75}}>
                    <TouchableOpacity style={[styles.Btn, filledForm ? null : { backgroundColor: '#787404'}]} onPress={() => handleSubmitPacket()}>
                        <Text style={[styles.textBtn]}>{route.params?.data ? "Update Paket" : "Buat Paket" }</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Container>
    )
}

export default NewPackage;