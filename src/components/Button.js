//import liraries
import {React,useState} from 'react';
import {Pressable, Text, StyleSheet,TouchableOpacity,View} from 'react-native';
import {Color} from '../constants/Constants';
import { ScrollView } from 'react-native-gesture-handler';

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



export default  TimeRangeSelector = () => {
  const [selectedRange, setSelectedRange] = useState('Today');

  const handleRangeSelection = (range) => {
    setSelectedRange(range);
  };

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View style={styles.container}>
        <TimeRangeButton
          range="Today"
          selectedRange={selectedRange}
          onPress={handleRangeSelection}
        />
        <TimeRangeButton
          range="Yesterday"
          selectedRange={selectedRange}
          onPress={handleRangeSelection}
        />
        <TimeRangeButton
          range="Last 7 Days"
          selectedRange={selectedRange}
          onPress={handleRangeSelection}
        />
        <TimeRangeButton
          range="Last Month"
          selectedRange={selectedRange}
          onPress={handleRangeSelection}
        />
      </View>
    </ScrollView>
  );
};

const TimeRangeButton = ({ range, selectedRange, onPress }) => {
  const isSelected = selectedRange === range;

  return (
    <TouchableOpacity
      style={[
        styles.button,
        { backgroundColor: isSelected ? "#56de26" : "#cccccc" }
      ]}
      onPress={() => onPress(range)}
    >
      <Text style={styles.textStyle}>{range}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    margin: 10,
  },
  button: {
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    marginHorizontal: 5,
    minWidth: 90, // Set a minimum width for each button
  },
  textStyle: {
    color: 'white',
    fontSize: 14,
    fontFamily:"Raleway-Bold"
  },
});

