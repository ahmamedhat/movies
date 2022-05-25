import React, {useEffect, useState} from 'react';
import {Text, SafeAreaView, Button, View} from 'react-native';
import {fetchMovies} from '../../../infrastrcuture/api/api';
import Icon from 'react-native-vector-icons/FontAwesome5';
import LoadingSpinner from '../../components/loading/LoadingSpinner';

const HomeScreen = () => {
  const [loading, setLoading] = useState(false);

  const getMovies = async (loadSpinner: boolean = true) => {
    try {
      loadSpinner ? setLoading(true) : null;
      const response = await fetchMovies('2');
      // if (currentPage == 1) {
      //   setPosts(apiPosts.data.data);
      // } else {
      //   apiPosts.data.data.length > 0
      // ? setPosts(posts.concat(apiPosts.data.data))
      // : setEndReached(true);
    } catch (error) {
      // loadSpinner ? setLoading(false) : null;
      // setRefreshing(false);
      console.log(error);

      loadSpinner ? setLoading(false) : null;
      // setRefreshing(false);
    }
  };

  return (
    <>
      {loading && <LoadingSpinner />}
      <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
        <Text>Home</Text>
        <Button title="get movies" onPress={() => getMovies()} />
        <Icon
          name="plus"
          color="gray"
          style={{paddingStart: 5, paddingEnd: 2, paddingTop: 1.5}}
        />
      </View>
    </>
  );
};

export default HomeScreen;
