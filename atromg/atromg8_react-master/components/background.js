import React, { Component } from "react";
import {View, ImageBackground, StyleSheet, Image, Dimensions, ScrollView, KeyboardAvoidingView} from "react-native";
import Layout from "../constants/Layout";
import Colors from "../constants/Colors";
import LinearGradient from 'react-native-linear-gradient';
import background from "../assets/images/bg.png";
import vault from "../assets/images/atrom-logo.png";

var height = Dimensions.get('window').height; //full height
var width = Dimensions.get('window').width; //full height

export class SplashBackground extends Component {
    render() {
        const { backgroundSize, height } = this.props;
        return (
            <View style={styles.container}>
                <LinearGradient colors={['#1a4876', '#0a3266']} style={styles.gradient}>
                    <ImageBackground style={styles.image} source={background}>
                        <Image source={vault} style={styles.logoSplash}/>
                        {this.props.children}
                    </ImageBackground>
                </LinearGradient>
            </View>
        );
    }
}

export class ImageBackgroundComponent extends Component {
    render() {
        const { backgroundSize, height } = this.props;
        return (
            <View style={styles.container}>
                <LinearGradient colors={['#FFFFFF', '#F1F5F8']} style={styles.gradient}>
                    <KeyboardAvoidingView
                        keyboardVerticalOffset = {20} // adjust the value here if you need more padding
                        style = {{ flex: 1 }}
                        behavior = "padding" >

                    <ScrollView contentContainerStyle={{ flexGrow:1}}>
                    <View style={styles.container}>
                        <ImageBackground style={styles.image} source={background}>
                        </ImageBackground>
                        <View style={styles.logoWrapper}>
                            <Image source={vault} resizeMode={'contain'} style={styles.logo}/>
                        </View>
                        {this.props.children}
                    </View>
                </ScrollView>
                    </KeyboardAvoidingView>
                </LinearGradient>
            </View>
        );

    }
}

export class ImageBackgroundOnlyComponent extends Component {
    render() {
        const { backgroundSize, height } = this.props;
        return (
            <View style={styles.container}>
                <LinearGradient colors={['#FFFFFF', '#F1F5F8']} style={styles.gradient}>
                    <KeyboardAvoidingView
                        keyboardVerticalOffset = {20} // adjust the value here if you need more padding
                        style = {{ flex: 1 }}
                        behavior = "padding" >
                    <ScrollView contentContainerStyle={{ flexGrow:1}}>
                        <View style={styles.container}>
                            <ImageBackground style={styles.image} source={background}>
                            </ImageBackground>
                            {this.props.children}
                        </View>
                    </ScrollView>
                    </KeyboardAvoidingView>
                </LinearGradient>
            </View>
        );

    }
}

const styles = StyleSheet.create({
    container:{
        width: "100%",
        // backgroundColor:'red',
        height:height,
        alignItems:'center',
    },
    gradient:{
        width: width,
        height: height,
    },
    image: {
        width: "100%",
        minHeight:320,
        maxHeight:height*(3/4),
        alignItems:'center',
        position:'absolute',
        top:0,
        left:0

    },
    logo:{
        marginTop:50,
        maxWidth:200,
        width:'100%'
    },
    logoWrapper:{
        width:width/2,
        alignItems:'center'

    },
    logoSplash:{
        width:'70%',
        maxWidth:200,
        top:'35%'
    }
});
