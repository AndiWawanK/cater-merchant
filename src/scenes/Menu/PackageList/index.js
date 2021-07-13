import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, Switch, FlatList, ScrollView } from 'react-native';
import { Container, Header, Icon } from 'components';
import { getPackets } from 'utils';
import styles from './styles';

const Item = (props) => {

    return (
        <Container>
            <ScrollView>
                <View style={styles.packageName}>
                    <Image source={{uri: props.image}} style={styles.imageDetail} />
                    <View style={styles.paketSection}>
                        <Text style={styles.textName}>{props.name}</Text>
                        <Text style={styles.textPaket}>{props.desc}</Text>
                    </View>
                    <TouchableOpacity style={styles.btnUp}>
                        <Icon name="down" type="AntDesign" style={styles.iconUP} />
                    </TouchableOpacity>
                </View>
                <View style={styles.editPackage}>
                    <Text style={styles.textEdit}>Edit Paket</Text>
                    <View style={styles.switch}>
                        <Switch
                            trackColor={{ false: "#D7DBDB", true: "#D7DBDB" }}
                            thumbColor={props.status == 1 ? "#FFD422" : "#9B9B9B"}
                            disabled
                            // ios_backgroundColor="#3e3e3e"
                            // onValueChange={toggleSwitch}
                            value={props.status == 1 ? true : false }
                            style={{ margin: 10 }}
                        />
                    </View>
                </View>
                <View style={styles.Line}></View>
            </ScrollView>
        </Container>
    )
}

const PackageList = ({navigation}) => {

    const [listPackets, setListPackets] = useState([])

    useEffect(() => {
        getPackets().then((res) => {
            setListPackets(res.data)
        }).catch((err) => {
            console.log(err)
        })
    }, []);

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
                        image={item.thumbnail}
                        name={item.name}
                        desc={item.description}
                        status={item.status}
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