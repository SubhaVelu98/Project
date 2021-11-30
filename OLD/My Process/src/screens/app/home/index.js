import React, {useContext} from 'react';
import {Button, View} from 'react-native';
import {asyncStorage} from '../../../utils';
import {AuthContext} from '../../../navigation/context';
import {navigationService} from '../../../utils';
import {SCREEN_CONSTANT} from '../../../navigation/constant';
import styles from './style';
export default function Home() {
  const {auth} = useContext(AuthContext);
  const onPressLogout = async () => {
    await asyncStorage.storeDataToLocal({authenticate: false});
    auth();
  };

  const onNavigateExample = () => {
    navigationService.navigateTo(SCREEN_CONSTANT.EXAMPLE);
  };
  const onNavigatesetpin = () => {
    navigationService.navigateTo(SCREEN_CONSTANT.SETPIN);
  };
  const onNavigaterestore = () => {
    navigationService.navigateTo(SCREEN_CONSTANT.RESTORE);
  };
  const onNavigaterecovery = () => {
    navigationService.navigateTo(SCREEN_CONSTANT.RECOVERY);
  };
  const onNavigaterecoveryphrase = () => {
    navigationService.navigateTo(SCREEN_CONSTANT.RECOVERYPHRASE);
  };
  const onNavigateconfirmpin = () => {
    navigationService.navigateTo(SCREEN_CONSTANT.CONFIRMPIN);
  };
  const onNavigatepatners = () => {
    navigationService.navigateTo(SCREEN_CONSTANT.PATNERS);
  };

  return (
    <View style={styles.container}>
      <Button title="Example" onPress={() => onNavigateExample()} />
      <Button title="logout" onPress={() => onPressLogout()} />
      <Button title="Set PIN" onPress={() => onNavigatesetpin()} />
      <Button title="Restore" onPress={() => onNavigaterestore()} />
      <Button title="Recovery" onPress={() => onNavigaterecovery()} />
      <Button title="Recovery phrase" onPress={() => onNavigaterecoveryphrase()} />
      <Button title="confirmpin" onPress={() => onNavigateconfirmpin()} />
      <Button title="Patners" onPress={() => onNavigatepatners()} />

    </View>
  );
}
