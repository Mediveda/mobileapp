//import liraries
import moment from 'moment';
import React, { useEffect } from 'react';
import {Modal, Pressable, StyleSheet, Text, View} from 'react-native';
import {Calendar} from 'react-native-calendars';
import ImagePicker from 'react-native-image-crop-picker';
import {Color} from '../constants/Constants';
import Ionicons from 'react-native-vector-icons/Ionicons';
export const CalenderModel = props => {
  const {isShow, onClosePress, onDateChange, selectedDate} = props;

  useEffect(()=>{
    console.log("Calendar Model called");
    console.log("moment().add(7, 'days').format('YYYY-MM-DD')",moment().add(7, 'days').format('YYYY-MM-DD'));
    console.log("moment().add(-7, 'days').format('YYYY-MM-DD')",moment().add(-7, 'days').format('YYYY-MM-DD'));
  },[]);
  return (
    <Modal visible={isShow} transparent={true}>
      <View style={calenderStyle.container}>
        <Pressable style={calenderStyle.backView} onPress={onClosePress} />
        <View style={calenderStyle.btnsheetView}>
          <Calendar
            maxDate={moment().add(7, 'days').format('YYYY-MM-DD')}
            minDate={moment().add(-7, 'days').format('YYYY-MM-DD')}
            horizontal={true}
            onDayPress={day => {
              onDateChange(day);
            }}
            pagingEnabled
            theme={{
              backgroundColor: '#ffffff',
              calendarBackground: '#ffffff',
              textSectionTitleColor: '#b6c1cd',
              textSectionTitleDisabledColor: '#d9e1e8',
              selectedDayBackgroundColor: '#00adf5',
              selectedDayTextColor: '#ffffff',
              todayTextColor: Color.white,
              todayBackgroundColor: Color.orange,
              dayTextColor: '#2d4150',
              textDisabledColor: '#d9e1e8',
              dotColor: '#00adf5',
              selectedDotColor: '#ffffff',
              arrowColor: Color.orange,
              disabledArrowColor: '#d9e1e8',
              monthTextColor: Color.orange,
              indicatorColor: Color.orange,
              textDayFontWeight: '300',
              textMonthFontWeight: 'bold',
              textDayHeaderFontWeight: '300',
              textDayFontSize: 16,
              textMonthFontSize: 16,
              textDayHeaderFontSize: 16,
            }}
          />
        </View>

        <Pressable style={calenderStyle.btnCancelBody} onPress={onClosePress}>
          <Text style={calenderStyle.btnCancelText}>close</Text>
        </Pressable>
      </View>
    </Modal>
  );
};
const calenderStyle = StyleSheet.create({
  container: {
    position: 'absolute',
    alignItems: 'center',
    zIndex: 100,
    height: '100%',
    width: '100%',
    justifyContent: 'center',
  },
  backView: {
    position: 'absolute',
    height: '130%',
    width: '130%',
    alignItems: 'center',
    backgroundColor: Color.blackO,
  },
  btnsheetView: {
    backgroundColor: Color.white,
    borderRadius: 10,
    padding: 20,
    width: '90%',
  },
  btnCancelBody: {
    width: '90%',
    padding: 15,
    borderRadius: 5,
    backgroundColor: Color.white,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  btnCancelText: {
    color: Color.orange,
    fontSize: 16,
    fontWeight: '500',
  },
});

export const ImagePickerModel = props => {
  const {isShow, onClosePress, setDataPress} = props;

  const onCameraClick = () => {
    ImagePicker.openCamera({
      width: 400,
      height: 400,
      multiple: true,
      mediaType: 'photo',
      // cropping: true,
      // includeBase64: true,
    })
      .then(image => {
        setDataPress('image', image);
      })
      .catch(e => {
        setDataPress('error', e);
      });
  };
  const onPhotoClick = () => {
    ImagePicker.openPicker({
      // width: 400,
      // height: 400,
      // cropping: true,
      multiple: true,
      mediaType: 'photo',
    })
      .then(image => {
        setDataPress('image', image);
      })
      .catch(error => {
        setDataPress('error', error);
      });
  };

  return (
    <Modal animationType="fade" transparent={true} visible={isShow}>
      <View style={ImagePickerStyle.backView} />
      <View style={ImagePickerStyle.container}>
        <View style={ImagePickerStyle.bottomsheet}>
          <View style={{width: '100%'}}>
            <View style={ImagePickerStyle.btnsheetView}>
              <Pressable
                style={ImagePickerStyle.btnsheetBoby}
                onPress={onPhotoClick}>
                <Ionicons
                  style={{paddingRight: 10}}
                  name="ios-image"
                  color={Color.orange}
                  size={24}
                />
                <Text style={ImagePickerStyle.btnCancelText}>Library</Text>
              </Pressable>

              <Pressable
                style={ImagePickerStyle.btnsheetBoby}
                onPress={onCameraClick}>
                <Ionicons
                  style={{paddingRight: 10}}
                  name="ios-camera"
                  color={Color.orange}
                  size={24}
                />
                <Text style={ImagePickerStyle.btnCancelText}>Camera</Text>
              </Pressable>
            </View>
            <Pressable
              style={ImagePickerStyle.btnCancelBody}
              onPress={onClosePress}>
              <Ionicons
                style={{paddingRight: 10}}
                name="close"
                color={Color.orange}
                size={24}
              />
              <Text style={ImagePickerStyle.btnCancelText}>Close</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const ImagePickerStyle = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 40,
    justifyContent: 'flex-end',
  },
  backView: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    flex: 1,
    alignItems: 'center',
    backgroundColor: Color.blackO,
  },

  bottomsheet: {
    width: '100%',
    bottom: 0,
    borderRadius: 5,
    alignItems: 'center',
  },
  btnsheetView: {
    backgroundColor: Color.white,
    borderRadius: 10,
    padding: 10,
  },
  btnsheetBoby: {
    width: '100%',
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnCancelBody: {
    width: '100%',
    padding: 10,
    borderRadius: 5,
    backgroundColor: Color.white,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  btnCancelText: {
    color: Color.orange,
    fontSize: 16,
    fontWeight: '700',
  },
});
