import React from 'react';
import { View, Text, StyleSheet ,FlatList} from 'react-native';

const ListScreen = () => {
    const friends = [
        {name:'subha', age:20},
        {name:'sona',age:23},
        {name:'subathra',age:24},
        {name:'sobi',age:20},
        {name:'sona',age:20},
        {name:'subathra',age:24},
        {name:'sobi',age:26},
        {name:'sona',age:20},
        {name:'subathra',age:20},
        {name:'sobi',age:20},
    ];
return (
        <FlatList
        //   horizontal
          keyExtractor={friends => friends.name}
          data={friends}
          renderItem={({item})=>{
             return (
                //  <View>
                   <Text style={styles.title}>{item.name} - Age {item.age}</Text>
                //    {/* <Text style={styles.ageText}>{item.age}</Text> */}
            //  </View>
             );
          }}
         />
);
};

const styles = StyleSheet.create({
title:{
    fontSize:20,
    marginVertical:10
},
ageText:{
    fontSize:10,
marginVertical:5
}
});

export default ListScreen;