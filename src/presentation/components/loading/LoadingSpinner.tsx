import React from 'react';
import {View} from 'react-native';
import {fillLoadingSpinner, styles} from './styles';
import {useSelector} from 'react-redux';
import * as Progress from 'react-native-progress';
import { LoaderDimensions } from '../../../shared/constants';

const LoadingSpinner = () => {

    return (
        <View style={[fillLoadingSpinner ,styles(theme).container]}>
          <Progress.CircleSnail
            color={theme?.color.secondaryColor}
            size={LoaderDimensions.SIZE}
            indeterminate={true}
          />
        </View>
    );
};

export default LoadingSpinner;
