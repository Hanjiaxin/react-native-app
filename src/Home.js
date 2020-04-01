import React, {Component} from 'react';
import {View, Text, Image, TextInput, TouchableOpacity,AsyncStorage,ToastAndroid} from 'react-native';
import Login from '../components/Login';
export default class Home extends Component{
    _delete = ()=>{
        AsyncStorage.removeItem('user',(error)=> {
            if(error){
                ToastAndroid.show('清楚数据失败！',ToastAndroid.TOP)
            }
            else{
                ToastAndroid.show('清楚数据成功！',ToastAndroid.TOP)
                this.props.navigator.replace({
                    component: Login
                })
            }
        })
    }

    render(){
        return(
            <View style={{flexDirection:"row"}}>
                <Text>首页</Text>
                <TouchableOpacity
                    style={{marginLeft:400}}
                    onPress={this._delete}
                >
                    <Text>退出登录</Text>
                </TouchableOpacity>
            </View>
        )
    }
}