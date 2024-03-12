//import liraries
import React from 'react';
import {
  View,
  TextInput as CTextInput,
  StyleSheet,
  Pressable,
  Text,
} from 'react-native';
import {Color} from '../constants/Constants';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// create a component
const TextInput = prors => {
  const {
    style,
    message,
    placeholder,
    secureTextEntry,
    isShowPassword,
    pressShowPassword,
    keyboardType,
    value,
    maxLength,
    onChangeText,
  } = prors;

  return (
    <View style={{paddingVertical: message ? 5 : 10}}>
      <View style={[styles.container, style]}>
        <CTextInput
          value={value}
          maxLength={maxLength}
          keyboardType={keyboardType}
          secureTextEntry={isShowPassword}
          style={[styles.TextInput]}
          onChangeText={text => onChangeText(text)}
          placeholderTextColor={Color.gray}
          placeholder={placeholder}
        />
        {secureTextEntry ? (
          <Pressable onPress={pressShowPassword}>
            <Ionicons
              name={isShowPassword ? 'ios-eye-off-outline' : 'ios-eye-outline'}
              size={20}
              color={Color.gray}
            />
          </Pressable>
        ) : (
          <></>
        )}
      </View>
      {message ? <Text style={styles.MessageText}>{message}</Text> : null}
    </View>
  );
};
// define your styles
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 42,
    paddingHorizontal: 15,
    backgroundColor: Color.background,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 100,
    borderWidth: 1,
    borderColor: Color.orange,
  },
  TextInput: {
    fontSize: 14,
    fontWeight: '600',
    flex: 1,
    height: '100%',

    color: Color.blackO,
  },
  MessageText: {
    marginTop: 10,
    alignSelf: 'flex-end',
    color: Color.red,
    fontSize: 12,
    fontWeight: '600',
  },
});

//make this component available to the app
export default TextInput;
