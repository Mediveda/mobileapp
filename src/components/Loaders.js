//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, ActivityIndicator, Modal} from 'react-native';
import {Message, Color, maxLength} from '../constants/Constants';

// create a component
const Loader = ({isLoading}) => {
  return (
    <Modal visible={isLoading} transparent>
      <View style={styles.container}>
        <ActivityIndicator color={Color.orange} size={'large'} />
      </View>
    </Modal>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.lightwhite,
  },
});

//make this component available to the app
export default Loader;
