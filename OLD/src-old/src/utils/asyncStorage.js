import AsyncStorage from '@react-native-async-storage/async-storage';
export const storeDataToLocal = async objectData => {
  try {
    const appLocalStorageData = await AsyncStorage.getItem('DBXLocalData');
    if (appLocalStorageData === null) {
      await AsyncStorage.setItem('DBXLocalData', JSON.stringify(objectData));
      return objectData;
    } else {
      const appLocalStorageDataObject = JSON.parse(appLocalStorageData);
      const newStorageData = {
        ...appLocalStorageDataObject,
        ...objectData,
      };
      await AsyncStorage.setItem(
        'DBXLocalData',
        JSON.stringify(newStorageData),
      );
      return newStorageData;
    }
  } catch (error) {
    throw error;
  }
};

export const getDataFromLocal = async () => {
  try {
    const allLocalStorageData = await AsyncStorage.getItem('DBXLocalData');
    if (allLocalStorageData !== null) {
      return JSON.parse(allLocalStorageData);
    } else {
      throw 'No record found';
    }
  } catch (error) {
    throw error;
  }
};

export const clearLocalStorage = async () => {
  try {
    await AsyncStorage.clear();
  } catch (error) {
    throw error;
  }
};
