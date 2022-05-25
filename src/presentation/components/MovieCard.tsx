import React from 'react';
import {View, StyleSheet, TouchableOpacity, Image, Text} from 'react-native';
import Config from 'react-native-config';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import {Movie} from '../../domain/movie';
import {Colors, ScreenDimensions} from '../../shared/constants';
import {defaultImage} from '../../shared/constants';

interface MovieProps {
  title: string;
  overview: string;
  image: string;
  date: string;
  rate: number;
  voteCount: number;
}

const MovieCard = (props: MovieProps) => {
  return (
    <View style={styles.movieContainer}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{uri: Config.IMAGES_URL + props.image}}
          defaultSource={defaultImage}
        />
      </View>

      <View style={{width: '70%', paddingLeft: 10}}>
        <Text
          numberOfLines={2}
          adjustsFontSizeToFit
          style={{
            color: Colors.COLOR_OFF_WHITE,
            fontWeight: 'bold',
            fontSize: 18,
          }}>
          {props.title}
        </Text>
        <Text
          numberOfLines={4}
          style={{color: Colors.COLOR_OFF_WHITE, marginTop: 10}}>
          {props.overview}
        </Text>
        <View
          style={{
            marginTop: 10,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginRight: 16,
              marginLeft: -3.5,
            }}>
            <EvilIcon name="calendar" size={28} color={Colors.COLOR_PRIMARY} />
            <Text style={{color: Colors.COLOR_OFF_WHITE, marginLeft: 2}}>
              {props.date}
            </Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <FontAwesome name="star" size={16} color={Colors.COLOR_PRIMARY} />
            <Text style={{color: Colors.COLOR_PRIMARY, marginLeft: 2}}>
              {props.rate}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  movieContainer: {
    backgroundColor: Colors.COLOR_CARD_BACKGROUND,
    flexDirection: 'row',
    borderRadius: 20,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    elevation: 5,
    shadowOpacity: 0.26,
    padding: 10,
    marginVertical: 10,
    alignSelf: 'center',
    width: '90%',
    height: ScreenDimensions.HEIGHT / 5,
  },

  image: {
    width: '100%',
    height: '100%',
  },

  imageContainer: {
    width: '30%',
    height: '100%',
    overflow: 'hidden',
    borderRadius: 10,
  },
});

export default MovieCard;
