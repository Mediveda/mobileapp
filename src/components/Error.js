//import liraries
import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {Color, Message} from '../Constants/Constants';

// create a component
export const FullError = props => {
  const {title, message, image, pressRetry, isLoad} = props;

  return (
    <>
      {!isLoad ? (
        <View style={Fullstyles.container}>
          {title ? <Text style={Fullstyles.title}> {title}</Text> : <View />}
          {message ? (
            <Text style={Fullstyles.message}> {message}</Text>
          ) : (
            <View />
          )}
          {pressRetry ? (
            <Pressable style={Fullstyles.retryBody} onPress={pressRetry}>
              <Text style={Fullstyles.retryText}>Retry</Text>
            </Pressable>
          ) : (
            <View />
          )}
        </View>
      ) : (
        <View />
      )}
    </>
  );
};

const Fullstyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.white,
  },
  title: {
    fontSize: 15,
    fontWeight: '700',
    color: Color.gray,
    padding: 5,
    textAlign: 'center',
  },
  message: {
    fontSize: 13,
    fontWeight: '500',
    color: Color.gray,
    textAlign: 'center',
    paddingVertical: 5,
    paddingHorizontal: 40,
  },
  retryBody: {
    margin: 10,
    padding: 10,
    borderWidth: 0.5,
    borderColor: Color.lightPurple,
    borderRadius: 5,
  },
  retryText: {
    fontSize: 13,
    fontWeight: 'bold',
    color: Color.purple,
    textAlign: 'center',
    paddingHorizontal: 30,
  },
});
