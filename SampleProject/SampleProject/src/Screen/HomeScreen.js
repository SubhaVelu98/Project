import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const Home = ({ navigation }) => {
  return <View>
    <Text>fmgbfd</Text>
    <Button
      onPress={() => navigation.navigate('Component')}
      title="Component Screen!" />
    <Button
      onPress={() => navigation.navigate('Recovery')}
      title="Recovery Screen!" />
    <Button
      onPress={() => navigation.navigate('Restore')}
      title="Restore Screen!" />
    <Button
      onPress={() => navigation.navigate('RecoveryPhrase')}
      title="RecoveryPhrase Screen!" />
    <TouchableOpacity onPress={() => navigation.navigate('List')}>
      <Text>ListScreen</Text>
    </TouchableOpacity>
    <Button
      onPress={() => navigation.navigate('Image')}
      title="Image Screen!" />
    <TouchableOpacity onPress={() => navigation.navigate('Counter')}>
      <Text>Counter Screen</Text>
    </TouchableOpacity>
    <Button
      onPress={() => navigation.navigate('Color')}
      title="Color Screen!" />
    <Button
      onPress={() => navigation.navigate('Square')}
      title="Square Screen!" />
    <Button
      onPress={() => navigation.navigate('Text')}
      title="Text Screen!" />
    <Button
      onPress={() => navigation.navigate('Box')}
      title="Box Screen!" />
    <Button
      onPress={() => navigation.navigate('Search')}
      title="Search Screen!" />

  </View>
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 40
  }
});

export default Home;