import React from 'react'
import { Text, View, SafeAreaView, StatusBar, Image, StyleSheet } from 'react-native';//import Onbord from './components/Onbord';
import AppIntroSlider from 'react-native-app-intro-slider';
import colors from '../assets/colors/colors';
// import LinearGradient from 'react-native-linear-gradient';

const data = [
    {
        title: 'save time by tracking your studies',
        text: 'Schedule your clases, assignments, quizzes and more',
        image: require('../assets/images/page1.jpeg'),

    },
    {
        title: 'save time by tracking your studies',
        text: 'Schedule your clases, assignments, quizzes and more',
        image: require('../assets/images/page2.jpeg'),

    },
    {
        title: 'Rocsave time by tracking your studies',
        text: "Schedule your clases, assignments, quizzes and more",
        image: require('../assets/images/page3.jpeg'),

    },
];

const Onbord = (props) => {

    const renderItem = ({ item }) => {
        return (
            <View style={styles.slide}>
                <Image source={item.image} style={styles.image} />
                <View>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.text}>{item.text}</Text>
                </View>
            </View>
        )
    };

    const keyExtractor = (item) => item.title;

    const renderDoneButton = () => {
        return (
            <View style={styles.rightTextWrapper}>
                <Text style={styles.rightText}>Done</Text>
            </View>
        )
    };
    const renderNextButton = () => {
        return (
            <View style={styles.rightTextWrapper}>
                <Text style={styles.rightText}>Next</Text>
            </View>
        )
    };
    const renderPrevButton = () => {
        return (
            <View style={styles.leftTextWrapper}>
                <Text style={styles.leftText}>Prev</Text>
            </View>
        )
    };

    const handleDone = () => {
        props.handleDone();
    }

    return (
        <View style={{ flex: 1 }}>
            <StatusBar translucent backgroundColor="transparent" />
            <AppIntroSlider
                keyExtractor={keyExtractor}
                renderItem={renderItem}
                data={data}
                renderDoneButton={renderDoneButton}
                renderNextButton={renderNextButton}
                renderPrevButton={renderPrevButton}
                showPrevButton
                dotStyle={styles.dotStyle}
                activeDotStyle={styles.activeDotStyle}
                onDone={handleDone} //handleDoneが実行されるとshowOnBordが「false」になるため、Homeコンポーネントが表示される
            />
        </View>
    )
}


const styles = StyleSheet.create({
    slide: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: colors.white,
    },
    image: {
        width: 250,
        height: 250,
        marginVertical: 60,
        marginTop: 0,
    },
    title: {
        fontSize: 24,
        color: colors.black,
        textAlign: 'center',
        fontFamily: 'OpenSans-Bold',
        marginHorizontal: 30, //中央寄せ
    },
    text: {
        fontSize: 14,
        color: colors.gray,
        textAlign: 'center',
        fontFamily: 'OpenSans-SemiBold',
        marginHorizontal: 60,
        marginTop: 20,
    },
    rightTextWrapper: {
        width: 40,
        height: 40,
        marginRight: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    rightText: {
        color: colors.blue,
        fontFamily: 'OpenSans-SemiBold',
        fontSize: 14,
    },
    leftTextWrapper: {
        width: 40,
        height: 40,
        marginLeft: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    leftText: {
        color: colors.blue,
        fontFamily: 'OpenSans-SemiBold',
        fontSize: 14,
    },
    dotStyle: {
        backgroundColor: colors.blueFaded,
    },
    activeDotStyle: {
        backgroundColor: colors.blue,
    },
    // doneButtonWrapper: {
    //     flex: 1,
    //     paddingLeft: 15,
    //     paddingRight: 15,
    //     borderRadius: 5
    // },
    // doneButtonText: {
    //     fontSize: 18,
    //     fontFamily: 'Gill Sans',
    //     textAlign: 'center',
    //     margin: 10,
    //     color: '#ffffff',
    //     backgroundColor: 'transparent',
    // },
});

export default Onbord;