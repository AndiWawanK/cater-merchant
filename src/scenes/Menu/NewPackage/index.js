import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Container, Header, InputText } from 'components';
import { launchImageLibrary } from 'react-native-image-picker';
import { createPacket } from 'utils';
import styles from './styles';

const NewPackage = ({ navigation }) => {
    const [state, setState] = useState({
        imageOpt: {
            fileUri: '',
            file: {}
        },
        packageName: '',
        price: '',
        discount: '',
        desc: '',
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

    const handleCreatePacket = () => {
        let formData = new FormData();
        formData.append('banner', state.imageOpt.file)
        formData.append('packet_name', state.packageName)
        formData.append('packet_price', state.price)
        formData.append('discount', state.discount == '' ? 0 : state.discount)
        formData.append('description', state.desc)
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

    const isFilled = () => {
        if(
            state.desc             != '' &&
            state.packageName      != '' &&
            state.price            != '' &&
            state.imageOpt.fileUri != ''
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
                            placeholder="100"
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
                    <TouchableOpacity style={[styles.Btn, filledForm ? null : { backgroundColor: '#787404'}]} onPress={() => handleCreatePacket()}>
                        <Text style={[styles.textBtn]}>Terima Pesanan</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Container>
    )
}

export default NewPackage;