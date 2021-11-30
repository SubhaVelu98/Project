import React from 'react';
import {View, StyleSheet} from 'react-native';
import {UIActivityIndicator} from 'react-native-indicators';
import {Colors} from '../theme';

export default function Loader(props) {
  if (props.isShow) {
    return (
      <View style={[Styles.container]}>
        <UIActivityIndicator size={40} color={Colors.orange} />
      </View>
    );
  } else {
    return <></>;
  }
}

const Styles = StyleSheet.create({
  container: {
    position: 'absolute',
    backgroundColor: 'rgba(192,192,192,0.5)',
    zIndex: 2,
    flex: 1,
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
