//import liraries
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import Ionic from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Color } from '../constants/Constants';
import { scale } from '../constants/Scale';
import { PrimaryButton } from './Button';
// import parse from 'html-react-parser';
import { parse } from 'node-html-parser';
import RenderHtml from 'react-native-render-html';
const { convert } = require('html-to-text');
import Icon from 'react-native-vector-icons/FontAwesome';

export const Titles = ({ item, onPress }) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={onPress} style={styles.viewContainer}>
        <View style={[styles.imageConatiner, { backgroundColor: item.color }]}>
          {/* <Image source={item.image} style={styles.image} /> */}
          <Ionic name={item.image} size={scale(24)} color={Color.white} />
        </View>
        <Text style={styles.title}>{item.title}</Text>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '50%',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  viewContainer: {
    borderRadius: scale(10),
    paddingVertical: scale(14),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.white,
    borderBottomWidth: 2,
    borderRightWidth: 2,
    borderColor: Color.orange,
    shadowColor: Color.black,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    elevation: 2,
  },
  imageConatiner: {
    height: scale(50),
    width: scale(50),
    borderRadius: scale(50),
    borderColor: Color.purple,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
  title: {
    fontSize: scale(12),
    fontWeight: '600',
    paddingTop: scale(10),
    color: Color.black,
  },
});
export const StudantTitles = ({ onPress, item }) => {
  const [image, setimage] = useState(null);

  if (item.uri) {
    const fileReaderInstance = new FileReader();
    fileReaderInstance.readAsDataURL(item?.uri);
    fileReaderInstance.onload = () => {
      setimage(fileReaderInstance.result);
    };
  }

  return (
    <Pressable onPress={onPress} style={studentstyles.profileContainer}>
      <Image
        style={studentstyles.imageContainer}
        source={{ uri: image || null }}
      />
      <View style={studentstyles.detailContaoner}>
        <Text style={studentstyles.nameText}>
          {item?.student ? item?.student : item?.name}
        </Text>
        <Text style={studentstyles.idText}>ID : {item?.enrollmentNo}</Text>
        <Text style={studentstyles.classText}>
          Class : {item?.className ? item?.className : item?.cls}-
          {item?.section}
        </Text>
      </View>
    </Pressable>
  );
};
const studentstyles = StyleSheet.create({
  imageContainer: {
    height: scale(85),
    width: scale(85),
    borderRadius: scale(10),
    resizeMode: 'contain',
  },
  profileContainer: {
    flexDirection: 'row',
    marginTop: scale(10),
    paddingVertical: scale(10),
    paddingHorizontal: scale(10),
    // marginHorizontal: scale(10),
    backgroundColor: Color.white,
    // borderRadius: scale(10),
    alignItems: 'center',
    shadowColor: Color.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: Color.orange,
  },

  nameText: {
    fontSize: scale(16),
    fontWeight: '600',
    color: Color.black,
  },
  idText: {
    paddingTop: scale(5),
    fontSize: scale(14),
    fontWeight: '600',
    color: Color.blackO,
  },
  classText: {
    paddingTop: scale(5),
    fontSize: scale(14),
    fontWeight: '600',
    color: Color.blackO,
  },
  detailContaoner: {
    flex: 1,
    marginLeft: scale(10),
  },
});
export const FeesTitles = ({ onPress, item, pressAction }) => {
  return (
    <Pressable onPress={onPress} style={Feesstyles.profileContainer}>
      <View style={Feesstyles.detailCantainer}>
        <View style={Feesstyles.cellView}>
          <Text style={Feesstyles.dateText}>{item?.months}</Text>
        </View>
        <View style={Feesstyles.cellView}>
          <Text style={Feesstyles.dateText}>
            {item?.paid.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          </Text>
          <Text
            style={[
              Feesstyles.classText,
              { textDecorationLine: 'line-through' },
            ]}>
            {item?.netFees.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          </Text>
        </View>
        <View style={Feesstyles.cellView}>
          {Number(item?.due) != 0 ? (
            <Text style={Feesstyles.dateText}>
              {item?.due.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            </Text>
          ) : (
            <FontAwesome5 name="check" color={Color.green} size={scale(30)} />
          )}
        </View>
        <View style={{ flex: 1.5 }}>
          {Number(item?.due) == 0 ? (
            <PrimaryButton
              onPress={pressAction}
              addStyle={{
                paddingHorizontal: scale(5),
                borderRadius: scale(5),
              }}
              textStyle={{ fontSize: scale(12) }}
              title={`View Detail`}
              isActive={false}
            />
          ) : (
            <PrimaryButton
              onPress={pressAction}
              addStyle={{
                paddingHorizontal: scale(5),
                borderRadius: scale(5),
              }}
              textStyle={{ fontSize: scale(12) }}
              title={`pay now`}
              isActive={true}
            />
          )}
        </View>
      </View>
    </Pressable>
  );
};

// const HTMLTextString = (nContent, statusId) => {
//   useEffect(() => {
//     console.log("HTMLTextString called passed, content", nContent);
//     // const reactElement = parse(content);
//   }, []);
  
//   const options = {
//     wordwrap: 130,
//     // ...
//   };

//   return (
//     <View style={NewNotificationstyles.contentView}>
//         <Text
//                 style={[
//                   NewNotificationstyles.dateText,
//                   NewNotificationstyles.unread,
//                 ]}>
//                   {/* gvbfhnjm */}
//         {convert(nContent, options).substring(0,50)}
//         </Text>
//           {/* <RenderHtml
//             contentWidth={scale(300)}
//             source={{ html: nContent }}
//           /> */}
//     </View>
//   )
// }

export const NewNotificationTitles = ({ onPress, items, pressAction }) => {
  
  const options = {
    wordwrap: 130,
    // ...
  };

  const contentString = convert(items.content, options);
  console.log("contentString", contentString);

  
  
  
  const linkRegex = /\[([^\]]*)\]\(([^)]*)\)|https?:\/\/[^\s]+/gi;
  const newlineRegex = /\r?\n/g;
  let cleanContent = contentString.replace(linkRegex, ''); // Remove links
  cleanContent = cleanContent.replace(/\[|\]/g, ''); // Remove square brackets
  cleanContent = cleanContent.replace(/\bbanner\b/g, ''); // Remove the word "banner"
  cleanContent = cleanContent.replace(/\bimage\b/g, ''); // Remove the word "image"
  cleanContent = cleanContent.replace(newlineRegex, ''); // Remove new lines
  
  const contentText = cleanContent.substring(0, 65).trim(); 

  console.log("contentText", contentText);

  return (
    <Pressable onPress={onPress} style={NewNotificationstyles.profileContainer}>
      <View style={NewNotificationstyles.detailCantainer}>
        {Number(items?.statusId) != 30 ? (
          <View style={NewNotificationstyles.moduleCircle}>
            <Text style={NewNotificationstyles.titleText}>
              {items?.moduleAbbr}
            </Text>
          </View>
        ) : (
          <View style={NewNotificationstyles.readModuleCircle}>
            <Text style={NewNotificationstyles.titleText}>
              {items?.moduleAbbr}
            </Text>
          </View>
        )}
        <View style={NewNotificationstyles.contentViewWrapper}>
          {/* <HTMLTextString
            nContent={items.content}
            statusId={items.statusId}
          /> */}
          {Number(items?.statusId) != 30 ? (
            <View style={NewNotificationstyles.contentView}>
              <Text
                style={[
                  NewNotificationstyles.dateText,
                  NewNotificationstyles.unread,
                ]}
                >
                  {contentText}...
              </Text>
            </View>
          ) : (
            <View style={{ flex: 1.5, paddingHorizontal: scale(5) }}>
              <Text
                style={[
                  NewNotificationstyles.dateText,
                  NewNotificationstyles.read,
                ]}
                >
                {contentText}...
              </Text>
            </View>
          )}

          <View
            style={NewNotificationstyles.dttmWrapper}>
            <Text style={{ fontSize: scale(10) }}>{items?.sentDttm}</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};



const NewNotificationstyles = StyleSheet.create({
  profileContainer: {
    flexDirection: 'row',
    paddingVertical: scale(10),
    paddingHorizontal: scale(10),
    borderTopWidth: 1,
    borderColor: Color.white,
  },
  contentViewWrapper: {
    flexDirection: 'row',
    flex: 2.5,
    padding: scale(2),
    borderBottomColor: '#ccc',
    borderBottomWidth: scale(1),
  },
  contentView: {
    flex: 1.5,
    paddingHorizontal: scale(5),
  },
  readModuleCircle: {
    flex: 0.5,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: scale(30),
    backgroundColor: Color.lightOrange,
    borderColor: Color.accentOrange,
    borderWidth: scale(1),
    height: scale(60),
  },
  moduleCircle: {
    flex: 0.5,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: scale(30),
    backgroundColor: Color.accentOrange,
    borderColor: Color.accentOrange,
    borderWidth: scale(1),
    height: scale(60),
  },
  titleText: {
    fontSize: scale(15),
    color: Color.white,
    fontWeight: 'bold',
  },
  unread: { color: '#202020', fontWeight: 'bold' },
  read: {
    color: '#373737',
  },
  dttmWrapper: {
    flex: 0.6,
    flexDirection: 'column',
    justifyContent: 'flex-end',

  },
  dateText: {
    fontSize: scale(13),
    color: Color.black,
  },
  detailCantainer: {
    flex: 1,
    flexDirection: 'row',
  },
  cellView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
});
const Feesstyles = StyleSheet.create({
  profileContainer: {
    flexDirection: 'row',
    paddingVertical: scale(10),
    paddingHorizontal: scale(10),
    borderTopWidth: 1,
    borderColor: Color.transperent,
  },
  dateText: {
    fontSize: scale(13),
    color: Color.black,
  },
  idText: {
    fontSize: scale(13),
    fontWeight: '600',
    color: Color.blackO,
  },
  classText: {
    fontSize: scale(13),
    fontWeight: '500',
    color: Color.blackO,
  },
  detailCantainer: {
    flex: 1,
    flexDirection: 'row',
    // justifyContent: 'space-between',
  },
  cellView: {
    flex: 1,
    // borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export const EventTitles = ({ onPress, item }) => {
  return (
    <View style={Eventstyles.container}>
      <View style={Eventstyles.viewContainer}>
        <View style={Eventstyles.titleContainer}>
          <Text style={Eventstyles.titleText}>{item.event}</Text>
          <Text style={Eventstyles.dateText}>{item.eventDt}</Text>
        </View>
        <View style={Eventstyles.detailsContainer}>
          <View style={Eventstyles.imageContainer}>
            <Image
              style={{
                height: '100%',
                width: '100%',
                resizeMode: 'contain',
                borderRadius: scale(5),
              }}
              source={
                item.imgPath === '-'
                  ? require('../assets/Images/logo1.png')
                  : { uri: item.imgPath }
              }
            />
          </View>
          <Text style={Eventstyles.detailText}>{item.description}</Text>
        </View>
      </View>
    </View>
  );
};
const Eventstyles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  viewContainer: {
    borderRadius: scale(5),
    backgroundColor: Color.white,
    borderWidth: scale(2),
    borderColor: Color.orange,
    shadowColor: Color.black,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    elevation: 2,
  },
  titleContainer: {
    padding: scale(10),
    alignItems: 'center',
    backgroundColor: Color.orange,
    flexDirection: 'row',
    color: Color.black,
    justifyContent: 'space-between',
  },
  titleText: {
    fontSize: scale(14),
    fontWeight: '600',
    color: Color.black,
  },
  detailsContainer: {
    padding: scale(5),
    paddingVertical: scale(10),
    flexDirection: 'row',
  },
  detailText: {
    paddingHorizontal: scale(15),
    paddingVertical: scale(5),
    fontSize: scale(13),
    fontWeight: '600',
    color: Color.black,
  },

  dateText: {
    fontSize: scale(13),
    fontWeight: 'bold',
    color: Color.orange,
    backgroundColor: Color.white,
    paddingHorizontal: scale(5),
    paddingVertical: scale(5),
  },
  imageContainer: {
    height: scale(65),
    width: scale(65),
    overflow: 'hidden',
    borderRadius: scale(5),
    backgroundColor: Color.detailsGray,
    padding: scale(1),
  },
});

export const StopItem = ({ item, onPress }) => {
  return (
    <Pressable onPress={onPress} style={Stopstyles.container}>
      <View style={Stopstyles.viewContainer}>
        <View style={Stopstyles.titleContainer}>
          <Text style={Stopstyles.titleText}>Stop No : {item?.stopId}</Text>
          <Text style={[Stopstyles.statusText]}>{item?.stop}</Text>
          <Text style={{ marginLeft: 20, fontSize: 12 }}>
            {item?.arrived && (
              <Icon
                style={{ paddingLeft: 10 }}
                name="check"
                size={30}
                color="green"
              />
            )}
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

const Stopstyles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: scale(5),
    paddingTop: scale(5),
  },
  viewContainer: {
    borderRadius: scale(5),
    backgroundColor: Color.white,
    borderBottomWidth: scale(1),
    borderColor: Color.transperent,
    paddingHorizontal: scale(10),
  },
  titleContainer: {
    padding: scale(10),
    alignItems: 'center',
    flexDirection: 'row',
    color: Color.black,
    justifyContent: 'space-between',
  },
  titleText: {
    fontSize: scale(14),
    fontWeight: '600',
    color: Color.darkBlue,
  },
  statusText: {
    fontSize: scale(13),
    fontWeight: 'bold',
  },
});

export const FeedbackItem = ({ item, onPress }) => {
  return (
    <Pressable onPress={onPress} style={Feedbackstyles.container}>
      <View style={Feedbackstyles.viewContainer}>
        <View style={Feedbackstyles.titleContainer}>
          <Text style={Feedbackstyles.titleText}>Case No : {item?.caseNo}</Text>
          <Text
            style={[
              Feedbackstyles.statusText,
              {
                color:
                  item?.status.toLowerCase() === 'in-process'
                    ? Color.red
                    : Color.green,
              },
            ]}>
            {item?.status}
          </Text>
        </View>
        <View style={Feedbackstyles.detailsContainer}>
          <Text style={Feedbackstyles.subText}>{item?.subject}</Text>
          <Text style={Feedbackstyles.detailText}>{item?.description}</Text>
        </View>
      </View>
    </Pressable>
  );
};
const Feedbackstyles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: scale(5),
  },
  viewContainer: {
    borderRadius: scale(5),
    backgroundColor: Color.white,
    borderBottomWidth: scale(1),
    borderColor: Color.transperent,
    paddingHorizontal: scale(10),
  },
  titleContainer: {
    padding: scale(10),
    alignItems: 'center',
    flexDirection: 'row',
    color: Color.black,
    justifyContent: 'space-between',
  },
  titleText: {
    fontSize: scale(14),
    fontWeight: '600',
    color: Color.darkBlue,
  },
  detailsContainer: {
    paddingHorizontal: scale(10),
  },
  subText: {
    fontSize: scale(13),
    fontWeight: '600',
    color: Color.black,
  },
  detailText: {
    paddingVertical: scale(10),
    fontSize: scale(13),
    fontWeight: '600',
    color: Color.detailsGray,
  },
  statusText: {
    fontSize: scale(13),
    fontWeight: 'bold',
  },
});
