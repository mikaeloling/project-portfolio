import {StyleSheet, View} from 'react-native';
import Vector1 from '../../assets/vectors/Vector1.svg';
import theme from '../../theme';

export interface ArrowProps {
  position: ArrowPosition;
}

export enum ArrowPosition {
  Up = 'up',
  Down = 'down',
}

export function Arrow(props: ArrowProps) {
  return (
    <View style={styles.root}>
      <Vector1/>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    width: 27,
    height: 68,
    flexShrink: 0,
  },
});
