import { combineReducers } from "redux";

import TempDefaults from "./TempDefaults";
import CryptoCurrencies from "./CryptoCurrencies";
import transactions from "./transactions";

import session from "./session";
import credentials from "./credentials";
import profile from "./profile";
import mnemonic from "./mnemonic";
import store from "./store";
import files from "./files";

import Transaction from "./Transaction";
import TransactionHistory from "./TransactionHistory";

export default combineReducers({
  transactions: transactions,
  store: store,
  mnemonic: mnemonic,
  files: files,
  profile: profile,
  session: session,
  settings: transactions,
  tempDefaults: TempDefaults,
  credentials: credentials,
  cryptoCurrencies: CryptoCurrencies,
  transaction: Transaction,
  transactionHistory: TransactionHistory
});
