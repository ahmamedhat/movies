import React from 'react';
import {View, StyleSheet, TouchableOpacity, Image , Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Colors, ScreenDimensions} from '../../shared/constants';
import {defaultImage} from '../../shared/constants';

const MovieCard = props => {
  return (
    <View style={styles.productContainerWithActions}>
      <TouchableOpacity onPress={props.onSelect}>
        
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  productContainerWithActions: {
    backgroundColor: 'white',
    margin: 20,
    borderRadius: 30,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    elevation: 5,
    shadowOpacity: 0.26,
    padding: 20,
    paddingBottom: 25,
  },

  productContainer: {
    margin: 5,
    height: ScreenDimensions.HEIGHT / 2.9
  }
});

export default MovieCard;
