import React, {useEffect, useContext} from 'react';
import {View} from 'react-native';
import {asyncStorage} from '../../utils';
import {AuthContext} from '../../navigation/context';
import styles from './styles';
import {Loader} from '../../component';
export default function Root() {
  const {app, auth} = useContext(AuthContext);
  useEffect(() => {
    checkAuthentication();
  }, []);

  const checkAuthentication = async () => {
    try {
      const localData = await asyncStorage.getDataFromLocal();
      if (localData.authenticate) {
        app();
      } else {
        auth();
      }
    } catch (error) {
      auth();
    }
  };

  return (
    <View style={styles.container}>
      <Loader isShow={true} />
    </View>
  );
}
