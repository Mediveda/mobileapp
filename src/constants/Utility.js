import {Platform} from 'react-native';
import {CommonActions} from '@react-navigation/native';
import Snackbar from 'react-native-snackbar';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const defaultNavigationOptions = {
  headerStyle: {
    backgroundColor: '#fff',
    elevation: 0,
  },
  headerBackTitle: 'Back',
  headerTitleAlign: 'center',
  headerShown: false,
};
export function setupNewRout(navigation, routName) {
  navigation.dispatch(
    CommonActions.reset({
      index: 0,
      routes: [{name: routName}],
    }),
  );
}
export function removeFromArray(arr) {
  var what,
    a = arguments,
    L = a.length,
    ax;
  while (L > 1 && arr.length) {
    what = a[--L];
    while ((ax = arr.indexOf(what)) !== -1) {
      arr.splice(ax, 1);
    }
  }
  return arr;
}
export function showSnackBar(msg, isError, button) {
  if (!button) {
    setTimeout(() => {
      return Snackbar.show({
        text: msg,
        duration: Snackbar.LENGTH_LONG,
        textColor: 'white',
        backgroundColor: isError ? 'red' : 'green',
        //  fontFamily: fontName.poppinsBold,
      });
    }, 100);
  } else {
    setTimeout(() => {
      return Snackbar.show({
        text: msg,
        duration: Snackbar.LENGTH_INDEFINITE,
        textColor: 'white',
        backgroundColor: isError ? 'red' : 'green',
        //  fontFamily: fontName.poppinsSemiBold,
        action: {
          text: button,
          textColor: 'white',
          onPress: () => {
            /* Do something. */
          },
        },
      });
    }, 100);
  }
}
export function getDeviceType() {
  if (Platform.OS === 'android') {
    return 'A';
  } else if (Platform.OS === 'ios') {
    return 'I';
  } else {
    return '';
  }
}
export const storeDataLocally = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    console.log("Error storeDataLocally:"+e);
    // saving error
  }
};
export const getLocalStoreData = async key => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.log("Error getLocalStoreData:"+e);
  }
};
