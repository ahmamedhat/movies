import React, {useEffect, useState} from 'react';
import {View, FlatList, RefreshControl, ActivityIndicator} from 'react-native';
import {fetchMovies} from '../../../infrastrcuture/api/api';
import LoadingSpinner from '../../components/loading/LoadingSpinner';
import {Movie} from '../../../domain/movie';
import MovieCard from '../../components/MovieCard';
import {Colors} from '../../../shared/constants';

const HomeScreen = () => {
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState<Movie[]>([]);
  const [refresh, setRefresh] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [endReached, setEndReached] = useState(false);
  const [bottomLoader, setBottomLoader] = useState(false);

  useEffect(() => {
    if (!endReached) {
      getMovies(refreshing || bottomLoader ? false : true);
    }
  }, [refresh, currentPage]);

  const getMovies = async (loadSpinner: boolean = true) => {
    try {
      loadSpinner ? setLoading(true) : null;
      const response = await fetchMovies(currentPage);
      console.log('page', response.data.page);
      if (currentPage == 1) {
        setMovies(response.data.results as Movie[]);
      } else {
        response.data.results.length > 0
          ? setMovies(movies.concat(response.data.results))
          : setEndReached(true);
      }
      setLoading(false);
      setRefreshing(false);
      setBottomLoader(false);
    } catch (error) {
      setLoading(false);
      setRefreshing(false);
      setBottomLoader(false);
      console.log(error);
    }
  };

  const onRefresh = () => {
    setRefresh(!refresh);
    setRefreshing(true);
    setCurrentPage(1);
    setEndReached(false);
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
    if (!endReached) {
      setBottomLoader(true);
      setCurrentPage(current => current + 1);
    }
  };


  return (
    <>
      {loading && <LoadingSpinner />}
      <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
        <FlatList
          contentContainerStyle={{paddingBottom: 80}}
          style={{width: '100%', backgroundColor: Colors.COLOR_BACKGROUND}}
          data={movies}
          keyExtractor={item => `${item.id} ${item.title}`}
          renderItem={({item}) => renderMovieCard(item)}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          onEndReached={!bottomLoader ? loadMorePosts : null}
          onEndReachedThreshold={0}
        />
        {bottomLoader && <View style={{position: 'absolute', bottom: 30}}>
          <ActivityIndicator size="large" color={Colors.COLOR_PRIMARY} />
        </View>}
      </View>
    </>
  );
};

export default HomeScreen;
