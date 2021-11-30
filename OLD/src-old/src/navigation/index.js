import React, {useState, useMemo} from 'react';
import {AuthContext} from './context';
import {NavigationContainer} from '@react-navigation/native';
import {
  RootStackScreen,
  AuthStackScreen,
  AppStackScreen,
} from './navigationStack';

export const navigationRef = React.createRef();
export default function Navigation(params) {
  const [currentStack, setCurrentStack] = useState('');
  const authContext = useMemo(() => {
    return {
      auth: () => {
        setCurrentStack('auth');
      },
      app: () => {
        setCurrentStack('app');
      },
    };
  });

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer ref={navigationRef}>
        {currentStack === '' ? (
          <RootStackScreen />
        ) : currentStack === 'auth' ? (
          <AuthStackScreen />
        ) : (
          <AppStackScreen />
        )}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
