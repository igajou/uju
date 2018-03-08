import React, { Component } from 'react';
import {
    Alert,
    Text,
    View,
    ScrollView,
    StyleSheet
} from 'react-native';

import {
    FormInput,
    List,
    ListItem
} from 'react-native-elements';


const interestDummy = [
    {title: 'VR ZONE SHINJUKU'},
    {title: 'リメンバー・ミー'},
    {title: 'チーズタッカルビ'}
];

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#F5FCFF'
    },
    form: {
        padding: 30
    }
});

export default class Interest extends Component {
    render() {
        return (
            <View style={style.container}>
                <View style={style.form}>
                    <FormInput
                        placeholder='行ってみたい場所やイベントを入力'
                    />
                </View>

                <ScrollView>
                    <List>
                        {interestDummy.map((item, i) => (
                            <ListItem
                                key={i}
                                title={item.title}
                                onLongPress={() => {
                                    Alert.alert('確認');
                                }}
                            />
                        ))}
                    </List>
                </ScrollView>
            </View>
        );
    }
}

// const TodoCheckBox = (row) => (
    {/*<CheckBox*/}
        // key={row.id}
        // title={row.message}
        // onPress={() => console.log('todoトグル')}
        // onLongPress={() => {
        //     Alert.alert(
        //         '確認',
        //         `[${row.message}]を削除しますか？`,
        //         [
        //             { text: '削除しない', style: 'cancel' },
        //             { text: '削除', onPress: () => console.log('todo削除') },
        //         ],
        //     );
        // }}
        // checked={row.isComplete}
    // />
// );

