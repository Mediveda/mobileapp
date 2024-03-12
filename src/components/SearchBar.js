//import liraries
import React from 'react';
import { View, Text, StyleSheet, Pressable, TextInput } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Color } from '../Constants/Constants';

export const SearchBar = (props) => {

    const { onChangeText,value,searchText,backPress,searchPress ,item1Icon, item1Press ,autoFocus } = props;

    return (
        <View style={Searchstyles.container}>
            <Pressable onPress={backPress}>
                <Ionicons name='ios-chevron-back-outline' size={25} color={Color.purple} />
            </Pressable>
            <Pressable style={Searchstyles.searchContainer} onPress={searchPress}>
                <View style={Searchstyles.searchBody}>
                <Ionicons name={'search'} size={20} color={Color.gray} />
                    <TextInput 
                    returnKeyType={'search'}
                    value={value}
                    onChangeText={(text)=>onChangeText(text)}
                    autoFocus={autoFocus} 
                    placeholder={searchText} 
                    placeholderTextColor={Color.gray}
                    style={Searchstyles.searchText}/>
                </View>
            </Pressable>
            {item1Press ? <Pressable onPress={item1Press}>
                <View style={Searchstyles.RightIconContainer}>
                    <Ionicons name={item1Icon} size={40} color={Color.purple} />
                </View>
            </Pressable> : <></>}
         </View>
    );
};
const Searchstyles = StyleSheet.create({
    container: {
        height: 45,
        alignItems: 'center',
        paddingHorizontal: 10,
        justifyContent: "space-between",
        flexDirection: 'row'
    },
    logoContainer: {
        height: 40,
        width: 40,
        backgroundColor: Color.white,
        borderRadius: 50,
        justifyContent:'center',
        alignItems:'center'

    },
    searchContainer: {
        flex: 1,
        paddingRight:10,paddingLeft:15,
        paddingVertical:2,
    },
    searchBody: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: Color.white,
        paddingHorizontal: 20,
        borderRadius: 50,
        flexDirection:'row'
    },
    searchText: {
        color: Color.black,
        fontSize: 15,
        fontWeight: '500',
        paddingHorizontal:5
    },
    RightIconContainer: {
        height: 45,
        width: 45,
        borderRadius: 50,
        justifyContent:'center',
        alignItems:'center'
    },
    
});