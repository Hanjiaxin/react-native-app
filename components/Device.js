import React, {Component} from 'react';
import {StyleSheet, View, Text, Dimensions, FlatList, Image, ScrollView, TextInput} from 'react-native';
import {Actions} from 'react-native-router-flux';

const {width} = Dimensions.get('window');

export default class Device extends Component {
    render() {
        return (
            <View style={{backgroundColor: '#EEEEEE'}}>
                <ScrollView>
                    <View style={styles.header}>
                        <View style={styles.search}>
                            <Image
                                source={require('../images/4.png')}
                                style={{width: 30, height: 30, left: 20, top: 6}}
                            />
                            <TextInput
                                placeholder="请输入您要搜索的关键字"
                                placeholderTextColor="white"
                                style={{top: 2, left: 20}}
                            />
                        </View>
                        <Image
                            source={require('../images/5.png')}
                            style={{top: 13, left: 15}}
                        />
                    </View>
                    <Image
                        source={require('../images/6.png')}
                        style={{width: width}}
                    />
                    <View style={{height: 440}}>
                        <View style={styles.list}>
                            <Image
                                source={require('../images/a2.jpg')}
                                style={{left: 20}}
                            />
                            <Text style={styles.txt}>居家维护保养</Text>
                        </View>
                        <View style={styles.list}>
                            <Image
                                source={require('../images/7.png')}
                                style={{left: 20}}
                            />
                            <Text style={styles.txt}>住宿优惠</Text>
                        </View>
                        <View style={styles.list}>
                            <Image
                                source={require('../images/8.png')}
                                style={{left: 20}}
                            />
                            <Text style={styles.txt}>出行接送</Text>
                        </View>
                        <View style={styles.list}>
                            <Image
                                source={require('../images/9.png')}
                                style={{left: 20}}
                            />
                            <Text style={styles.txt}>E族活动</Text>
                        </View>
                    </View>
                    <View style={styles.submit}><Text style={{color:'white',fontSize:20}}>发布需求</Text></View>
                    <Text style={styles.tail}>@E族之家 版权所有</Text>
                    <View style={{height:20}}></View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        height: 60,
        backgroundColor: 'rgb(242,48,48)',
        flexDirection: 'row'
    },
    search: {
        height: 38,
        backgroundColor: 'rgb(251,184,184)',
        width: 440,
        marginTop: 13,
        marginLeft: 20,
        borderRadius: 30,
        flexDirection: 'row'
    },
    list: {
        backgroundColor: 'white',
        height: 100,
        marginTop: 10,
        flexDirection: 'row'
    },
    txt: {
        fontSize: 25,
        color: '#616A6B',
        left: 60,
        top: 29
    },
    submit:{
        width:0.8*width,
        height:60,
        backgroundColor:'rgb(242,48,48)',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10,
        marginTop:30,
        marginLeft:50
    },
    tail:{
        color:'rgb(118,118,118)',
        textAlign:'center',
        marginTop:40
    }
});