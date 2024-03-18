//import liraries
import React from 'react';
import {View, Text, StyleSheet, Pressable,Image,TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Message, Color, maxLength} from '../constants/Constants';
import {scale} from '../constants/Scale';
import { SafeAreaView } from 'react-native-safe-area-context';

// Back Header =================

export const BackHeader = props => {
  const {
    title,
    backPress,
    item1Icon,
    item2Icon,
    item1Press,
    item2Press,
    centerText,
  } = props;

  return (
    <View style={Backstyles.container}>
      {backPress ? (
        <Pressable
          style={{
            paddingVertical: 10,
            paddingLeft: scale(5),
            paddingRight: scale(10),
          }}
          onPress={backPress}>
          <Ionicons
            name="ios-chevron-back-outline"
            size={25}
            color={Color.orange}
          />
        </Pressable>
      ) : (
        <View />
      )}
      {title ? (
        <Text
          style={[
            Backstyles.TitleText,
            {textAlign: centerText ? 'center' : 'left'},
          ]}>
          {title}
        </Text>
      ) : (
        <></>
      )}
      {item1Icon ? (
        <Pressable onPress={item1Press}>
          <Ionicons name={item1Icon} size={25} color={Color.orange} />
        </Pressable>
      ) : (
        <View />
      )}
      {item2Icon ? (
        <Pressable onPress={item2Press}>
          <Ionicons name={item2Icon} size={25} color={Color.purple} />
        </Pressable>
      ) : (
        <View />
      )}
    </View>
  );
};

const Backstyles = StyleSheet.create({
  container: {
    height: 50,
    alignItems: 'center',
    paddingHorizontal: 10,
    flexDirection: 'row',
    backgroundColor: "gray",
  },
  TitleText: {
    flex: 1,
    fontSize: 18,
    fontWeight: '700',
    color: Color.black,
  },
});

const CustomHeader = ({navigation}) => {
 
  return (
    <SafeAreaView style={styles.container}>

      <View style ={{marginLeft:10,flexDirection:"row",}}>
      <TouchableOpacity 
       onPress={()=>navigation.navigate("More")} // Updated onPress function
    >
      <Image
        source={require('../assets/Image/user.jpeg')} 
        style={styles.image}
      />
    </TouchableOpacity>
     
      
      <Text style={{padding:10,fontFamily:"Raleway-Bold",fontSize:20}}>
          Medical Store
      </Text>

       
       <TouchableOpacity style={{
        padding:10,
        marginLeft:120
    }}
       //onPress={} // Updated onPress function
    >
      <Ionicons name='notifications-outline' size={32}/>
    </TouchableOpacity>

      </View>

     
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
   
    height: 80,
    backgroundColor: 'white',
    borderBottomWidth: 1, // Add a bottom border
    borderBottomColor: 'lightgray', // Border color
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 }, // Adjust shadow offset
    shadowOpacity: 0.25, // Adjust shadow opacity
    shadowRadius: 3, // Adjust shadow radius
    elevation: 5, // Android elevation for shadow
    paddingTop: 10, 
    
  },
  image: {
    width: 50,
    height: 50, 
    borderRadius: 10, 
  },
});

export default CustomHeader;


export const SearchHeader = props => {
  const {searchText, logoPress, searchPress, item1Icon, item1Press} = props;

  return (
    <View style={Searchstyles.container}>
      <Pressable onPress={logoPress}>
        <View style={Searchstyles.logoContainer}></View>
      </Pressable>
      <Pressable style={Searchstyles.searchContainer} onPress={searchPress}>
        <View style={Searchstyles.searchBody}>
          <Ionicons name={'search'} size={20} color={Color.gray} />
          <Text style={Searchstyles.searchText}> {searchText}</Text>
        </View>
      </Pressable>
      {item1Press ? (
        <Pressable onPress={item1Press}>
          <View style={Searchstyles.RightIconContainer}>
            <Ionicons name={item1Icon} size={40} color={Color.purple} />
          </View>
        </Pressable>
      ) : (
        <></>
      )}
    </View>
  );
};



const Searchstyles = StyleSheet.create({
  container: {
    height: 40,
    alignItems: 'center',
    paddingLeft: 20,
    backgroundColor:"gray",
    paddingRight: 13,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  logoContainer: {
    height: 40,
    width: 40,
    backgroundColor: Color.white,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchContainer: {
    flex: 1,
    paddingRight: 10,
    paddingLeft: 15,

    paddingVertical: 2,
  },
  searchBody: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Color.white,
    paddingHorizontal: 20,
    borderRadius: 50,
    flexDirection: 'row',
  },
  searchText: {
    color: Color.gray,
    fontSize: 15,
    fontWeight: '500',
    paddingHorizontal: 5,
  },
  RightIconContainer: {
    height: 45,
    width: 45,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
