import React from 'react';
import { View, Text, StyleSheet ,FlatList} from 'react-native';
import ImageDetail from '../Component/ImageDetail';

const ImageScreen = () => {
    return <View>
<ImageDetail title="Forest" 
imageSource={require('../../assets/forest.jpg')}
score={9}/>
<ImageDetail title="Beach"
imageSource={require('../../assets/beach.jpg')}
score={8}/>
<ImageDetail title="Mountain"
imageSource={require('../../assets/mountain.jpg')}
score={7}/>

    </View>
}   
 const styles = StyleSheet.create({});

 export default ImageScreen;