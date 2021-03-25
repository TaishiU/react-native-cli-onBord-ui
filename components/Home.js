import React from 'react'
import { Text, View, SafeAreaView, StatusBar, Image, StyleSheet } from 'react-native';

const Home = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text >🎉Welcom to the Home🎉</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, //要素サイズをスクリーン縦・横幅いっぱいに取得する
        justifyContent: 'center', //縦方向の中央寄せ
        alignItems: 'center', //横方向の中央寄せ
    },
});

export default Home;
