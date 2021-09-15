import React from 'react'
import {View, Image, Text, Dimensions, StyleSheet, SafeAreaView, Button, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default function HomeScreen() {
    const navigation = useNavigation();
    return (
        <SafeAreaView>
            <Image source={require('../assets/images/splash_logo.png')} style={styles.ImageStyle} resizeMode='contain'/>
            <View style={styles.ButtonView}> 
                <TouchableOpacity onPress={() => navigation.navigate('Game')}><Text style={styles.ButtonStyle}>Start Game</Text></TouchableOpacity>
            </View>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    ImageStyle: {
        width: windowWidth - 40,
        marginTop: -150,
        marginBottom: -240,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    ButtonView: {
        backgroundColor:'#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
        width: windowWidth - 144,
        height: 62,
        marginTop: '30%',
        marginBottom: 0,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    ButtonStyle: {
	    fontFamily: 'Roboto',
        fontSize: 28,
        color: '#272727',
    }
})