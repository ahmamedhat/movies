import {StyleSheet} from 'react-native';
import {Theme} from '../../../shared/theme';


export const fillLoadingSpinner = StyleSheet.absoluteFill

export const styles = (theme: Theme) =>
  StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.0)',
        zIndex: 1
    }
  });
