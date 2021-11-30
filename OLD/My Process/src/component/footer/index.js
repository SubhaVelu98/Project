import React from 'react'
import { View, Text, ImageBackground, Image,TouchableOpacity } from 'react-native'

const Footer = () => {
    return (
        <View style={{position:'absolute',bottom:0,width:'100%'}}>
            <ImageBackground source={require('../../../assets/image/bg.png')} style={{ paddingVertical:20 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 10 }}>
                    <TouchableOpacity style={{alignItems:'center'}}>
                        <Image source={require('../../../assets/image/footerhome.png')} style={{ width: 45, height: 45 }} />
                        <Text style={{color:'#fff',fontSize:10}}>Home</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{alignItems:'center'}}>
                        <Image source={require('../../../assets/image/footeroperation.png')} style={{ width: 45, height: 45 }} />
                        <Text style={{color:'#fff',fontSize:10}}>Operation</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{alignItems:'center'}}>
                        <Image source={require('../../../assets/image/footerservice.png')} style={{ width: 45, height: 45 }} />
                        <Text style={{color:'#fff',fontSize:10}}>Services</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{alignItems:'center'}}>
                        <Image source={require('../../../assets/image/footerchat.png')} style={{ width: 45, height: 45 }} />
                        <Text style={{color:'#fff',fontSize:10}}>Chat</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{alignItems:'center'}}>
                        <Image source={require('../../../assets/image/footerstacking.png')} style={{ width: 45, height: 45 }} />
                        <Text style={{color:'#fff',fontSize:10}}>Staking</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    )
}

export default Footer
