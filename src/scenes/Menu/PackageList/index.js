import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, Switch, FlatList, ScrollView } from 'react-native';
import { BASE_URL } from 'constants';
import { Container, Header, Icon } from 'components';
import { getPackets } from 'utils';
import styles from './styles';
import { useFocusEffect } from '@react-navigation/native';

const Item = (props) => {
    return (
        <Container>
            <ScrollView>
                <View style={styles.packageName}>
                    <Image source={{uri: BASE_URL + props.data.thumbnail}} style={styles.imageDetail} />
                    <View style={styles.paketSection}>
                        <Text style={styles.textName}>{props.data.name}</Text>
                        <Text style={styles.textPaket}>{props.data.description}</Text>
                    </View>
                    <TouchableOpacity style={styles.btnUp}>
                        <Icon name="down" type="AntDesign" style={styles.iconUP} />
                    </TouchableOpacity>
                </View>
                <View style={styles.editPackage}>
                    <View style={{ flex: 0.9 }}>
                        <TouchableOpacity onPress={props.onEditPress}>
                            <Text style={styles.textEdit}>Edit Paket</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.switch}>
                        <Text>{props.data.status == 1 ? 'Aktif' : 'Nonaktif'}</Text>
                    </View>
                </View>
                <View style={styles.Line}></View>
            </ScrollView>
        </Container>
    )
}

const PackageList = ({navigation}) => {

    const [listPackets, setListPackets] = useState([])

    useFocusEffect(
        React.useCallback(() => {
            getPackets().then((res) => {
                setListPackets(res.data)
            }).catch((err) => {
                console.log(err)
            }) 
        }, [navigation])
    )

    // useEffect(() => {
        // getPackets().then((res) => {
        //     setListPackets(res.data)
        // }).catch((err) => {
        //     console.log(err)
        // })
    // }, []);

    return (
        <Container backgroundColor="white">
            <Header
                text="Daftar Paket"
                name="chevron-left"
                type="Feather"
                onPress={() => navigation.goBack()}
                back={true}
            />
            <FlatList
                data={listPackets}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <Item
                        data={item}
                        onEditPress={() => navigation.navigate('NewPackage', { data: item })}
                        onValueChange={() => console.log('aaa')}
                    />
                )}
            />
            <TouchableOpacity style={styles.Btn} onPress={() => navigation.navigate('NewPackage')}>
                <Text style={styles.textBtn}>Buat Paket Baru</Text>
            </TouchableOpacity>
        </Container>
    )
}

export default PackageList;