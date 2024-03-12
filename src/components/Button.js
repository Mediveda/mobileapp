//import liraries
import React from 'react';
import {Pressable, Text, StyleSheet,TouchableOpacity} from 'react-native';
import {Color} from '../constants/Constants';

// create a component
export const PrimaryButton = props => {
  const {title, onPress, isActive, addStyle, textStyle} = props;

  return (
    <TouchableOpacity style={{
      height: 50,
      width: "100%",
      backgroundColor: "green",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 10,
      marginTop: 100
    }}
      onPress={onPress} // Updated onPress function
    >
      <Text style={textStyle}>{title}</Text>
    </TouchableOpacity>
    
  );
};

const PrimaryStyles = StyleSheet.create({
  container: {
    height: 42,
    paddingHorizontal: 18,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.purple,
    borderRadius: 100,
  },
  Text: {
    color: Color.white,
    fontWeight: '600',
    textTransform: 'uppercase',
  },
});

export const BorderButton = props => {
  const {title, onPress, addStyle} = props;

  return (
    <Pressable
      style={[BorderButtonStyles.container, addStyle]}
      onPress={onPress}>
      <Text style={BorderButtonStyles.Text}>{title}</Text>
    </Pressable>
  );
};

const BorderButtonStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 18,
    justifyContent: 'center',
    alignItems: 'center',

    borderRadius: 5,
    borderWidth: 0.8,
    borderColor: Color.purple,
  },
  Text: {
    color: Color.purple,
    fontWeight: '600',
  },
});
