import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, Switch, FlatList, ScrollView } from 'react-native';
import { Container, Header, Icon } from 'components';
import { getPackets } from 'utils';
import styles from './styles';

const DATA = [
    {
        image: require("assets/7-Rekomendasi-Jasa-Catering-Harian-Jogja-Enak-Murah-Emak-Emak-Pasti-Suka2.png"),
        name: 'Paket Hemat',
        desc: 'Reference site about Lorem Ipsum, giving informat on its origins, as well as a random Lipsum generator.'
    },
    {
        image: require("assets/7-Rekomendasi-Jasa-Catering-Harian-Jogja-Enak-Murah-Emak-Emak-Pasti-Suka2.png"),
        name: 'Paket Boros',
        desc: 'Reference site about Lorem Ipsum, giving informat on its origins, as well as a random Lipsum generator.'
    },
    {
        image: require("assets/7-Rekomendasi-Jasa-Catering-Harian-Jogja-Enak-Murah-Emak-Emak-Pasti-Suka2.png"),
        name: 'Paket Diet',
        desc: 'Reference site about Lorem Ipsum, giving informat on its origins, as well as a random Lipsum generator.'
    },
]

const Item = (props) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
        <Container>
            <ScrollView>
                <View style={styles.packageName}>
                    <Image source={props.image} style={styles.imageDetail} />
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
                            thumbColor={isEnabled ? "#FFD422" : "#9B9B9B"}
                            // ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch}
                            value={isEnabled}
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
    const handleGetPackets = () => {
        getPackets().then((res) => {
            console.log(res);
        }).catch((err) => {
            console.log(err);
        })
    }
    
    useEffect(() => {
        handleGetPackets();
    }, [])

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
                data={DATA}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <Item
                        image={item.image}
                        name={item.name}
                        desc={item.desc}
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