import Icon from "react-native-vector-icons/MaterialIcons"
import React, { useEffect, useRef, useState } from "react"
import { StatusBar, View, Text, TouchableOpacity,FlatList,Image, TextInput } from "react-native"
import styles from './style';
import Footer from '../../../component/footer';

import { Neomorph } from 'react-native-neomorph-shadows';
const App = () => {
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third',
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third',
    },{
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third',
    },
  ];
  
  const Item = ({ title ,image}) => (
    <View style={styles.item}>
      <View style={{height:100,alignItems:'center',justifyContent:'center'}}>
      {/* <Text style={styles.title}>{title}</Text> */}
      {/* <Image source={image} style={{height:100,width:100,borderWidth:1,borderColor:'red'}}/> */}
      <Image
          style={{height:60,width:70}}
          source={{uri: 'https://storage.googleapis.com/cgyinsights/wp-content/2018/03/1_qJyrPq9RD2AjfZ_MWEtzMQ.png'}}
        />
      </View>
    </View>
  );
  const renderItem = ({ item }) => (
    <Item 
    title={item.title}
    // image={item.image}
     />
  );
  return (
    <View style={styles.Container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.navBar}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <TouchableOpacity style={{ marginRight: 20 }}>
            <Icon name={"arrow-back-ios"} type={"MaterialIcons"} style={styles.headerIcon} />
          </TouchableOpacity>
          <Text style={styles.navText}>Patner</Text>
        </View>
        <TouchableOpacity>
          <Icon name={"filter-list"} style={styles.headerIcon} />
        </TouchableOpacity>

      </View>
   
      <View style={{ margin: 20 }}>
        <Neomorph
          inner // <- enable shadow inside of neomorph
          swapShadows // <- change zIndex of each shadow color
          style={{
            flex:1,
            flexDirection: 'row',
            alignItems: 'center',
            alignSelf:'center',
            justifyContent: 'space-between',
            paddingHorizontal: 10,
            shadowRadius: 5,
            borderRadius: 10,
            backgroundColor: '#F2F2F2',
            width: 315,
            height: 50,
          }}
        >
          <TextInput placeholder='Filter' placeholderTextColor='rgba(0,0,0,0.5)' style={styles.inputText} />
          <Icon name={"keyboard-arrow-down"} style={styles.inputIcon} />
        </Neomorph>
        <View style={styles.listContainer}>
      <FlatList
        data={DATA}
        numColumns={2}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
      </View>
  
      <Footer/>

    </View>
  
  )

}


export default App