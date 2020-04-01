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
    Button,
    ToastAndroid
} from 'react-native';

const {width} = Dimensions.get('window');
export default class Release extends Component {
    constructor() {
        super();
        this.state = {
            tits: [],
            pages: 1,
        }
    }

    componentDidMount() {
        fetch('https://cnodejs.org/api/v1/topics?limit=15&page=' + this.state.pages).then(res => res.json())
            .then(res => this.setState({tits: res.data}))
    }

    word = () => {
        let arr = ['已回复', '未回复'];
        let n = Math.floor(Math.random() * arr.length + 1) - 1;
        return arr[n];
    }
    front = () => {
        if (this.state.pages == 1) {
            ToastAndroid.show('已经是第一页！', ToastAndroid.BOTTOM);
        }
        else {
            this.setState({
                pages: --this.state.pages
            })
            fetch('https://cnodejs.org/api/v1/topics?limit=15&page=' + this.state.pages).then(res => res.json())
                .then(res => this.setState({tits: res.data}))
        }
    }
    after = () => {
        this.setState({
            pages: ++this.state.pages
        })
        fetch('https://cnodejs.org/api/v1/topics?limit=15&page=' + this.state.pages).then(res => res.json())
            .then(res => this.setState({tits: res.data}))
    }

    render() {
        return (
            <View>
                <View>
                    {
                        this.state.tits.map((item) => (
                            <View style={styles.txt}>
                                <View style={styles.txt1}>
                                    <Text style={{
                                        fontSize: 18,
                                        color: 'grey',
                                        lineHeight: 30
                                    }}>{item.title ? (item.title.length > 15 ? item.title.substr(0, 15) + "..." : item.title) : ""}</Text>
                                </View>
                                <View style={styles.txt2}>
                                    <Text style={{
                                        fontSize: 18,
                                        color: 'grey',
                                        lineHeight: 30,
                                    }}>{item.create_at.substr(0, 10)}</Text>
                                </View>
                                <View style={styles.txt3}>
                                    <Text style={{
                                        fontSize: 18,
                                        color: 'grey',
                                        lineHeight: 30,
                                    }}>{this.word()}</Text>
                                </View>
                            </View>
                        ))
                    }
                </View>
                <View style={styles.button}>
                    <TouchableOpacity onPress={() => this.front()}>
                        <View style={{
                            width: 80,
                            height: 40,
                            backgroundColor: 'red',
                            borderRadius: 20,
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginLeft: 50,
                            marginTop: 5
                        }}>
                            <Text style={{color: 'white'}}>上一页</Text>
                        </View>
                    </TouchableOpacity>
                    <Text style={{
                        fontSize: 18,
                        color: 'grey',
                        marginTop: 11,
                        marginLeft: 100
                    }}>第{this.state.pages}页</Text>
                    <TouchableOpacity onPress={() => this.after()}>
                        <View style={{
                            width: 80,
                            height: 40,
                            backgroundColor: 'red',
                            borderRadius: 20,
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginLeft: 120,
                            marginTop: 5
                        }}>
                            <Text style={{color: 'white'}}>下一页</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>

        )
    }
}
const styles = StyleSheet.create({
    txt: {
        backgroundColor: 'white',
        flexDirection: 'row',
        width: width
    },
    txt2: {
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        flexDirection: 'row',
        marginTop: 20,
        backgroundColor: 'white',
        height: 50
    }
})