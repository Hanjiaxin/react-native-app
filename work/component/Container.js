import React, {Component} from 'react';
import {
    View,
    Text,
    TextInput,
    Image,
    StyleSheet,
} from 'react-native';

export default class Container extends Component {
    render() {
        return (
            <View style={styles.header}>
                <View style={styles.search}>
                    <TextInput
                        placeholder="请输入商品名称"
                        style={styles.input}
                    />
                    <Image
                        source={require('../images/3.png')}
                        style={{right:30,top:5}}
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
        flexDirection:'row'
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
        alignItems:'center'
    },
    txt: {
        height: 45,
        textAlign: 'center',
        fontSize: 20,
        paddingTop: 10,
        color: '#515A5A',
        marginLeft:58
    }
})