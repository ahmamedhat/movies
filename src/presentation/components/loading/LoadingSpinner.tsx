import React from 'react';
import {View} from 'react-native';
import {fillLoadingSpinner, styles} from './styles';
import * as Progress from 'react-native-progress';
import { Colors, LoaderDimensions } from '../../../shared/constants';

const LoadingSpinner = () => {

    return (
        <View style={[fillLoadingSpinner ,styles.container]}>
          <Progress.CircleSnail
            color={Colors.COLOR_PRIMARY}
            size={LoaderDimensions.SIZE}
            indeterminate={true}
          />
        </View>
    );
};

export default LoadingSpinner;
