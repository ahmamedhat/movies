// import React from 'react';
// import {View, StyleSheet, TouchableOpacity, Image} from 'react-native';
// // import { Text } from 'react-native-elements';
// import Icon from 'react-native-vector-icons/FontAwesome5';
// // import {Colors, ScreenDimensions} from '../shared/constants';
// // import helpers from '../shared/helpers';
// // import {defaultImage} from '../shared/constants';

// const Post = props => {
//   return (
//     <View style={styles.productContainerWithActions}>
//       <TouchableOpacity onPress={props.onSelect}>
//         <View style={styles.productContainer}>
//           {props.postOwner && (
//             <View
//               style={{
//                 flexDirection: 'row',
//                 alignItems: 'center',
//                 marginBottom: 10,
//               }}>
//               <View
//                 style={{
//                   backgroundColor: Colors.COLOR_GREEN_INACTIVE,
//                   width: 40,
//                   height: 40,
//                   borderRadius: 20,
//                   justifyContent: 'center',
//                   alignItems: 'center',
//                   paddingTop: 5
//                 }}>
//                 <Text style={styles.userIconText} numberOfLines = {1} adjustsFontSizeToFit>
//                   {helpers.getUserNameNickName(props.postOwner)}
//                 </Text>
//               </View>
//               <View>
//                 <Text style={styles.ownerText}>{props.postOwner}</Text>
//                 <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
//                   <Icon
//                     name="clock"
//                     color="gray"
//                     style={{paddingStart: 5 ,paddingEnd: 2, paddingTop: 1.5}}
//                   />
//                   <Text style={styles.dateText}>{props.createdAt}</Text>
//                 </View>
//               </View>
//             </View>
//           )}
//           <View style={styles.upperBanner}>
//             {props.status && (
//               <View style={styles.state}>
//                 <Text style={styles.stateText}>{props.status} </Text>
//                 <Icon
//                   name={helpers.getStatusIcon(props.status)}
//                   size={18}
//                   color={Colors.CHECKMARK}
//                 />
//               </View>
//             )}
//           </View>
//           <View style={styles.imageContainer}>
//             <Image
//               style={styles.image}
//               source={{uri: helpers.parsePostImageUrl(props.imageURL)}}
//               // defaultSource={defaultImage}
//             />
//           </View>
//           <View style={styles.naming}>
//             <Text style={styles.title}>{props.title}</Text>
//             <View style={styles.priceAndPostTypeLabelsContainer}>
//               {props.price && <Text style={styles.price}>${props.price}</Text>}
//               <Text style={[styles.price, {textAlign: 'right', flex: 1}]}>
//                 {props.postType}
//               </Text>
//             </View>
//           </View>
//         </View>
//         <View style={styles.actions}>{props.children}</View>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   productContainerWithActions: {
//     backgroundColor: 'white',
//     margin: 20,
//     borderRadius: 30,
//     shadowColor: 'black',
//     shadowOffset: {width: 0, height: 2},
//     elevation: 5,
//     shadowOpacity: 0.26,
//     padding: 20,
//     paddingBottom: 25,
//   },

//   productContainer: {
//     margin: 5,
//     height: ScreenDimensions.HEIGHT / 2.9
//   },

//   upperBanner: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },

//   userIconText: {
//     color: Colors.lightBg,
//     fontSize: 26,
//     fontFamily: 'Poppins-Bold',
//     marginHorizontal:2
//   },

//   dateText: {
//     fontSize: 11,
//     color: 'gray',
//     fontFamily: 'Poppins-Regular',
//   },

//   ownerText: {
//     fontSize: 15,
//     color: Colors.COLOR_PRIMARY,
//     fontWeight: '600',
//     paddingStart: 5,
//     fontFamily: 'Poppins-Regular',
//   },

//   state: {
//     flexDirection: 'row',
//     alignItems: 'center'
//   },

//   stateText: {
//     fontSize: 15,
//     color: 'gray',
//     fontWeight: 'bold',
//   },

//   image: {
//     width: '100%',
//     height: '100%',
//   },

//   imageContainer: {
//     width: '100%',
//     height: '60%',
//     overflow: 'hidden',
//     marginTop: 25,
//     borderRadius: 10
//   },

//   naming: {
//     alignItems: 'center',
//   },

//   title: {
//     fontSize: 18,
//     marginVertical: 4,
//   },

//   priceAndPostTypeLabelsContainer: {
//     flexDirection: 'row',
//     width: '100%',
//     justifyContent: 'space-between',
//   },

//   price: {
//     fontSize: 14,
//     color: '#888',
//   },

//   actions: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginLeft: 5,
//   },
// });

// export default Post;
