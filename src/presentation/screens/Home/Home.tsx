import React, {useEffect, useState} from 'react';
import {Text, Button, View, FlatList, RefreshControl} from 'react-native';
import {fetchMovies} from '../../../infrastrcuture/api/api';
import Icon from 'react-native-vector-icons/FontAwesome5';
import LoadingSpinner from '../../components/loading/LoadingSpinner';
import {Movie} from '../../../domain/movie';
import MovieCard from '../../components/MovieCard';
import {Colors} from '../../../shared/constants';

const HomeScreen = () => {
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState<Movie[]>([]);
  const [refresh, setRefresh] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    getMovies();
  }, [refresh]);

  const getMovies = async (loadSpinner: boolean = true) => {
    try {
      loadSpinner ? setLoading(true) : null;
      const response = await fetchMovies(currentPage);
      setMovies(response.data.results as Movie[]);
      setLoading(false);
      setRefreshing(false);

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

      setLoading(false);
      // setRefreshing(false);
    }
  };

  const onRefresh = () => {
    setRefresh(!refresh);
    setRefreshing(true);

    // setCurrentPage(1);
    // setEndReached(false);
  };

  const renderMovieCard = (movie: Movie) => {
    return (
      <MovieCard
        title={movie.title}
        overview={movie.overview}
        image={movie.poster_path}
        date={movie.release_date}
        rate={movie.vote_average}
        voteCount={movie.vote_count}
      />
    );
  };

  const loadMorePosts = () => {
    // if (!endReached) {
      setCurrentPage(current => current + 1);
    // }
  };

  return (
    <>
      {loading && <LoadingSpinner />}
      <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
        <FlatList
          style={{width: '100%', backgroundColor: Colors.COLOR_BACKGROUND}}
          data={movies}
          keyExtractor={item => item.id}
          renderItem={({item}) => renderMovieCard(item)}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          onEndReached={loadMorePosts}
          onEndReachedThreshold={1}
        />
      </View>
    </>
  );
};

export default HomeScreen;
