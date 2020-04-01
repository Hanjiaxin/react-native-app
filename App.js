/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    SafeAreaView,
    AsyncStorage,
    StyleSheet,
    ScrollView,
    View,
    Text
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {Navigator} from 'react-native-deprecated-custom-components';
import First from './components/First'
import Login from './components/Login';
console.disableYellowBox = true;

class LaunchView extends Component {
    render(){
        return(
            <View><Text>正在检测此app是否为第一次打开并跳转到相应页面</Text></View>
        )
    }
    componentDidMount() {
        // 延迟点
        setTimeout(this.openApp.bind(this),3500);
        // this.openApp();
    }

    openApp() {
        AsyncStorage.getItem('isFirst', (error, result) => {

            if (result == 'false') {
                console.log('不是第一次打开');

                this.props.navigator.replace({
                    component: Login
                })

            } else {

                console.log('第一次打开');

                // 存储
                AsyncStorage.setItem('isFirst', 'false', (error) => {
                    if (error) {
                        alert(error);
                    }
                });

                this.props.navigator.replace({
                    component: First
                })
            }
        });
    }
}

export default class App extends Component {
    componentDidMount(){
        setTimeout(SplashScreen.hide,2000)
    }

    // 渲染场景
    _renderScene(route, navigator) {
        return (
            <route.component navigator={navigator} {...route} />
        )
    }

    render() {
        return (
            <Navigator initialRoute={{
                component: LaunchView
            }}
                       renderScene={this._renderScene.bind(this)}
                       style={{flex: 1}}
            />
        )
    }
}
const styles = StyleSheet.create({})
