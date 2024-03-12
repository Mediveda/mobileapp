import React, {useEffect, useState} from 'react';
import {Keyboard, StyleSheet, View, Text} from 'react-native';
import {Dropdown as CDropdown} from 'react-native-element-dropdown';
import {Color} from '../constants/Constants';
import {scale} from '../constants/Scale';

const Dropdown = ({value, onSelectItem, data, placeholder, search = true}) => {
  const [isFocus, setIsFocus] = useState(false);

  return (
    <View style={styles.container}>
      <CDropdown
        style={[styles.dropdown, isFocus && {borderColor: 'blue'}]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        search={search}
        maxHeight={300}
        labelField="label"
        valueField="value"
        activeColor={Color.orange}
        renderItem={item => (
          <View>
            <Text style={styles.renderLabel}>{item.label}</Text>
          </View>
        )}
        placeholder={!isFocus ? placeholder : '...'}
        searchPlaceholder="Search..."
        value={value?.value || null}
        onFocus={() => {
          Keyboard.dismiss();
          setIsFocus(true);
        }}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          onSelectItem(item);
          setIsFocus(false);
        }}
      />
    </View>
  );
};

export default Dropdown;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  dropdown: {
    height: scale(40),
    paddingHorizontal: scale(5),
    paddingVertical: scale(0),
    borderWidth: scale(1),
    borderRadius: scale(5),
    borderColor: Color.detailsGray,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
    color: Color.detailsGray,
  },
  placeholderStyle: {
    fontSize: 16,
    color: Color.detailsGray,
  },
  selectedTextStyle: {
    fontSize: 14,
    color: Color.black,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 14,
    color: Color.detailsGray,
  },
  renderLabel: {
    fontSize: 14,
    color: Color.black,
    padding: scale(10),
  },
});
