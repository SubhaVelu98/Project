/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import './shim';


import Bitcoin from "react-native-bitcoinjs-lib";
const keypair = Bitcoin.ECPair.makeRandom();
console.log(`${keypair.getAddress()} keypair.getAddress()`); // your brand new base58-encoded Bitcoin address


AppRegistry.registerComponent(appName, () => App);
