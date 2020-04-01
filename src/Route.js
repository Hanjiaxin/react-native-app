import React from 'react';
import {StyleSheet, View, Text, Dimensions, FlatList, Image, ScrollView, StatusBar} from 'react-native';
import {Router, Scene, Tabs, Modal, Drawer, Overlay, Lightbox} from 'react-native-router-flux';
import Container from '../components/Container';
import Person from '../components/Person';
import Device from '../components/Device';
import Release from '../components/Release';
// 图标安装完后，要link，link成功后卸载App，再重新 npm run android
// 重装完以后，App停止运行的，卸载除了 react-native-router-flux之外的没用的包
// yarn remove 包名   删除包
// 每新装完一个包，服务就会自动停止，

const TabIconhome = ({focused, title}) => {
    return (
        <View>
            <Text style={{
                fontFamily: 'iconfont',
                fontSize: 30,
                top: 10,
                color: focused ? 'rgb(242,48,48)' : 'grey'
            }}>{'\ue615'}</Text>
            <Text
                style={{color: focused ? 'rgb(242,48,48)' : 'grey'}}
            >
            </Text>
        </View>
    );
};
const TabIconlist = ({focused, title}) => {
    return (
        <View>
            <Text style={{
                fontFamily: 'iconfont',
                fontSize: 30,
                top: 10,
                color: focused ? 'rgb(242,48,48)' : 'grey'
            }}>{'\ue60f'}</Text>
            <Text
                style={{color: focused ? 'rgb(242,48,48)' : 'grey'}}
            >
            </Text>
        </View>
    );
};
const TabIconperson = ({focused, title}) => {
    return (
        <View>
            <Text style={{
                fontFamily: 'iconfont',
                fontSize: 30,
                top: 10,
                color: focused ? 'rgb(242,48,48)' : 'grey'
            }}>{'\ue627'}</Text>
            <Text
                style={{color: focused ? 'rgb(242,48,48)' : 'grey'}}
            >
            </Text>
        </View>
    );
};
const {width} = Dimensions.get('window');
const App = () => {


    return (
        <View style={{flex: 1}}>
            <StatusBar
                backgroundColor={'red'}
                barStyle="light-content"
            />
            <Router>
                {/*Router里只能放一个组件*/}
                {/* 将全部的跳转页面都放在Root下面 */}
                <Scene key="root">
                    {/* key 就是给页面的标签,供Actions使用 */}
                    {/* component 设置关联的页面 */}
                    {/* title 就是给页面标题 */}
                    {/* initial 就是设置默认页面*/}
                    <Tabs
                        key='tabbar'
                        swipeEnabled={true}
                        wrap={false}
                        hideNavBar
                        activeTintColor="rgb(242,48,48)"
                        inactiveTintColor="grey"
                        tabBarStyle={{backgroundColor: 'white'}}
                    >
                        <Scene
                            key="one"
                            component={Device}
                            title="首页"
                            header={null}
                            initial={true}
                            icon={TabIconhome}
                        />
                        <Scene
                            key="two"
                            component={Container}
                            title="列表"
                            icon={TabIconlist}
                        />
                        <Scene
                            key="three"
                            header={null}
                            component={Person}
                            title="个人中心"
                            icon={TabIconperson}
                        />
                    </Tabs>
                    <Scene
                        key="four"
                        component={Release}
                        title="我的发布"
                        navigationBarStyle={{backgroundColor:'red'}}
                        titleStyle={{color:'white',marginLeft:0.33*width}}
                        back={true}
                        backButtonTintColor='white'
                    />
                </Scene>
            </Router>
        </View>
    );
};


export default App;