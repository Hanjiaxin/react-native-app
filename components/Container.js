import React, {Component} from 'react';
import {
    View,
    Text,
    TextInput,
    Image,
    StyleSheet,
    FlatList,
    Dimensions,
    ScrollView,
} from 'react-native';

const {width} = Dimensions.get('window');

export default class Container extends Component {
    render() {
        let data = [];
        for (var i = 1; i < 7; i++) {
            if (i % 2 == 0) {
                data.push({
                    img: require('../images/2.png'),
                    txtstring: "上好佳2上好佳2上好佳2上好佳2上好佳2",
                    txtnumber: "36.00"
                })
            }
            else {
                data.push({
                    img: require('../images/1.png'),
                    txtstring: "上好佳1上好佳1上好佳1上好佳1上好佳1",
                    txtnumber: "36.00"
                })
            }
        }
        return (
            <View>
                <ScrollView>
                    <View style={styles.header}>
                        <View style={styles.search}>
                            <TextInput
                                placeholder="请输入商品名称"
                                style={styles.input}
                            />
                            <Image
                                source={require('../images/3.png')}
                                style={{right: 30, top: 5}}
                            >
                            </Image>
                        </View>
                        <View style={styles.nav}>
                            <Text style={{
                                height: 45,
                                textAlign: 'center',
                                fontSize: 20,
                                paddingTop: 10,
                                color: '#EC7063'
                            }}>综合</Text>
                            <Text style={styles.txt}>销量</Text>
                            <Text style={styles.txt}>新品</Text>
                            <Text style={styles.txt}>价格</Text>
                            <Text style={styles.txt}>信用</Text>
                        </View>
                    </View>
                    <FlatList
                        numColumns={2}
                        data={data}
                        renderItem={
                            ({item}) => <View style={styles.slide}>
                                <Image source={item.img}></Image>
                                <Text style={styles.txtstring}>{item.txtstring}</Text>
                                <Text style={styles.txtnumber}>{item.txtnumber}</Text>
                            </View>
                        }
                    />
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'white',
        width: 540,
        alignItems: 'center',
    },
    search: {
        height: 48,
        backgroundColor: '#EEEEEE',
        width: 440,
        justifyContent: 'center',
        marginTop: 10,
        borderRadius: 6,
        flexDirection: 'row'
    },
    input: {
        width: 432,
        height: 45,
        left: 30
    },
    nav: {
        width: 540,
        height: 55,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    txt: {
        height: 45,
        textAlign: 'center',
        fontSize: 20,
        paddingTop: 10,
        color: '#515A5A',
        marginLeft: 58
    },
    slide: {
        backgroundColor: 'white',
        width: 216,
        height: 265,
        marginLeft: 18,
        marginTop: 10,
        left: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    txtstring: {
        color: '#B2BABB',
        fontSize: 14,
        textAlign: 'left'
    },
    txtnumber: {
        color: '#E74C3C',
        paddingTop: 6,
        marginRight: 170
    }
})