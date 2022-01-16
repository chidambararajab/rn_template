import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Keychain from "react-native-keychain";
export const storeDataToLocal = async (objectData) => {
  try {
    const appLocalStorageData = await Keychain.getGenericPassword();
    const password = "iTsAsEcReT";

    if (!appLocalStorageData) {
      const DBXLocalData = JSON.stringify(objectData);
      await Keychain.setGenericPassword(DBXLocalData, password);
    } else {
      const appLocalStorageDataObject = JSON.parse(
        appLocalStorageData.username
      );
      const newStorageData = {
        ...appLocalStorageDataObject,
        ...objectData,
      };
      const DBXLocalData = JSON.stringify(newStorageData);
      await Keychain.setGenericPassword(DBXLocalData, password);
    }
  } catch (error) {
    throw error;
  }
};

export const getDataFromLocal = async () => {
  try {
    const allLocalStorageData = await Keychain.getGenericPassword();
    if (allLocalStorageData) {
      return JSON.parse(allLocalStorageData.username);
    } else {
      throw "No record found";
    }
  } catch (error) {
    throw error;
  }
};

export const storeNewInstallAppFlag = async () => {
  try {
    await AsyncStorage.setItem("newInstallApp", "false");
  } catch (error) {
    throw error;
  }
};

export const checkNewInstallAppFlag = async () => {
  const allLocalStorageData = await AsyncStorage.getItem("newInstallApp");
  if (allLocalStorageData !== null) {
    return allLocalStorageData;
  } else {
    throw "No record found";
  }
};

export const clearLocalStorage = async () => {
  try {
    await AsyncStorage.clear();
  } catch (error) {
    throw error;
  }
};

export const resetKeyChain = async () => {
  try {
    const credentials = await Keychain.resetGenericPassword();
    return credentials;
  } catch (error) {
    throw error;
  }
};
