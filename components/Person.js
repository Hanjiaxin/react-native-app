import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Dimensions,
    FlatList,
    Image,
    ScrollView,
    TouchableOpacity,
    AsyncStorage
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import {Actions} from 'react-native-router-flux';
const {width} = Dimensions.get('window');
export default class Person extends Component {
    constructor(props) {
        super(props);
        this.state = {
            avatarSource: {}
        };
    }

    cameraAction = () => {
        const options = {
            title: '',
            cancelButtonTitle: '取消',
            takePhotoButtonTitle: '拍照',
            chooseFromLibraryButtonTitle: '选择照片',
            storageOptions: {
                skipBackup: true,
                path: 'images',
            }
        };


        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled photo picker');
            }
            else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            }
            else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            }
            else {
                let source = {uri: response.uri};

                // You can also display the image using data:
                // let source = { uri: 'data:image/jpeg;base64,' + response.data };
                this.setState({
                    avatarSource: source
                });
            }
        });
    }

    storeData = (value) => {
        try {
            AsyncStorage.setItem('avatarSource', value);
            console.log('保存成功');
        } catch (error) {
            console.log('保存失败');
        }
    }

    getData = () => {
        try {
            AsyncStorage.getItem('avatarSource').then((value)=>this.setState({avatarSource:value}))
        }catch(err) {
            console.log('取值错误');
        }
    }
    render() {
        return (
            <View style={{backgroundColor: '#EEEEEE'}}>
                <ScrollView>
                    <View style={{backgroundColor: 'red', height: 200}}>
                        <TouchableOpacity onPress={()=>this.cameraAction()}>
                            <View style={styles.frame}>
                                <Image source={this.state.avatarSource}
                                       style={{width: 100, height: 100, borderRadius: 50}}/>
                            </View>
                        </TouchableOpacity>
                        <Text style={{fontSize: 20, marginLeft: 200, marginTop: 10, color: '#B3B6B7'}}>BINNU
                            DHILLON</Text>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        backgroundColor: 'white',
                        height: 70
                    }}>
                        <Image
                            source={require('../images/a1.png')}
                            style={{top: 17, left: 10}}
                        />
                        <Text
                            style={{fontSize: 20, left: 25, top: 20, color: 'rgb(118,118,118)'}}
                        >我的个人中心</Text>
                    </View>
                    <View style={{height: 100, marginTop: 2, backgroundColor: 'white', flexDirection: 'row'}}>
                        <View style={styles.icon}>
                            <Image
                                source={require('../images/管理.png')}
                                style={{left: 55, top: 25}}
                            />
                            <Text style={{top: 35, left: 40, color: 'rgb(118,118,118)'}}>账户管理</Text>
                        </View>
                        <View>
                            <Image
                                source={require('../images/地址.png')}
                                style={{left: 200, top: 25}}
                            />
                            <Text style={{top: 35, left: 190, color: 'rgb(118,118,118)'}}>收货地址</Text>
                        </View>
                        <View>
                            <Image
                                source={require('../images/我的信息.png')}
                                style={{left: 355, top: 25}}
                            />
                            <Text style={{top: 35, left: 340, color: 'rgb(118,118,118)'}}>我的信息</Text>
                        </View>
                    </View>
                    <View style={{height: 100, backgroundColor: 'white', flexDirection: 'row'}}>
                        <View style={styles.icon}>
                            <Image
                                source={require('../images/我的订单.png')}
                                style={{left: 55, top: 25}}
                            />
                            <Text style={{top: 35, left: 40, color: 'rgb(118,118,118)'}}>我的订单</Text>
                        </View>
                        <View>
                            <Image
                                source={require('../images/我的二维码.png')}
                                style={{left: 200, top: 25}}
                            />
                            <Text style={{top: 35, left: 182, color: 'rgb(118,118,118)'}}>我的二维码</Text>
                        </View>
                        <View>
                            <Image
                                source={require('../images/我的积分.png')}
                                style={{left: 342, top: 25}}
                            />
                            <Text style={{top: 35, left: 330, color: 'rgb(118,118,118)'}}>我的积分</Text>
                        </View>
                    </View>
                    <View style={{height: 100, backgroundColor: 'white', flexDirection: 'row'}}>
                        <View style={styles.icon}>
                            <Image
                                source={require('../images/我的收藏.png')}
                                style={{left: 55, top: 25}}
                            />
                            <Text style={{top: 35, left: 40, color: 'rgb(118,118,118)'}}>我的收藏</Text>
                        </View>
                    </View>
                    <View style={{height: 60, backgroundColor: 'white', marginTop: 10, flexDirection: 'row'}}>
                        <Image
                            source={require('../images/标签.png')}
                            style={{top: 10, left: 5}}
                        />
                        <Text style={{fontSize: 20, color: 'rgb(118,118,118)', left: 10, top: 13}}>E族活动</Text>
                    </View>
                    <View style={{height: 100, backgroundColor: 'white', marginTop: 3, flexDirection: 'row'}}>
                        <View style={styles.icon}>
                            <Image
                                source={require('../images/维修.png')}
                                style={{left: 55, top: 25}}
                            />
                            <Text style={{top: 35, left: 36, color: 'rgb(118,118,118)'}}>居家维修保养</Text>
                        </View>
                        <View>
                            <Image
                                source={require('../images/车.png')}
                                style={{left: 180, top: 23}}
                            />
                            <Text style={{top: 33, left: 163, color: 'rgb(118,118,118)'}}>出行接送</Text>
                        </View>
                        <View>
                            <Image
                                source={require('../images/个人.png')}
                                style={{left: 330, top: 25}}
                            />
                            <Text style={{top: 35, left: 315, color: 'rgb(118,118,118)'}}>我的受赠人</Text>
                        </View>
                    </View>
                    <View style={{height: 100, backgroundColor: 'white', flexDirection: 'row'}}>
                        <View style={styles.icon}>
                            <Image
                                source={require('../images/住宿.png')}
                                style={{left: 55, top: 25}}
                            />
                            <Text style={{top: 35, left: 36, color: 'rgb(118,118,118)'}}>我的住宿优惠</Text>
                        </View>
                        <View>
                            <Image
                                source={require('../images/我的活动.png')}
                                style={{left: 180, top: 23}}
                            />
                            <Text style={{top: 33, left: 163, color: 'rgb(118,118,118)'}}>我的活动</Text>
                        </View>
                        <View>
                            <Image
                                source={require('../images/我的发布.png')}
                                style={{left: 330, top: 25}}
                            />
                            <Text
                                style={{top: 35, left: 315, color: 'rgb(118,118,118)'}}
                                onPress={()=>Actions.four()}
                            >我的发布</Text>
                        </View>
                    </View>
                    <View style={{height: 80}}>
                        <Text style={{textAlign: 'center', color: 'grey', top: 27}}>BINNU DHILLON | 退出</Text>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    icon: {
        flexDirection: 'column'
    },
    frame: {
        width: 100,
        height: 100,
        borderRadius: 50,
        borderWidth: 0.5,
        marginLeft: 220,
        marginTop: 30
    }
})
