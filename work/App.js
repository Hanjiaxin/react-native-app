import React from 'react';
import {StyleSheet, View, Text, Dimensions, FlatList, Image} from 'react-native';
import Container from './component/Container';
// 图标安装完后，要link，link成功后卸载App，再重新 npm run android
// 重装完以后，App停止运行的，卸载除了 react-native-router-flux之外的没用的包
// yarn remove 包名   删除包
// 每新装完一个包，服务就会自动停止，

const styles = StyleSheet.create({
    slide: {
        backgroundColor: 'white',
        width: 216,
        height: 265,
        marginLeft: 18,
        marginTop: 10,
        left:20,
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
    },
});

const {width} = Dimensions.get('window');
console.log(width);

const App = () => {
    let data = [];
    for (var i = 1; i < 7; i++) {
        if (i % 2 == 0) {
            data.push({
                img: require('./images/2.png'),
                txtstring: "上好佳2上好佳2上好佳2上好佳2上好佳2",
                txtnumber: "36.00"
            })
        }
        else {
            data.push({
                img: require('./images/1.png'),
                txtstring: "上好佳1上好佳1上好佳1上好佳1上好佳1",
                txtnumber: "36.00"
            })
        }
    }


    return (
        <View>
            <Container/>
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
        </View>
    );
};


export default App;
