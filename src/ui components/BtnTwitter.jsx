import {StyleSheet, View} from 'react-native';
import _ from '../../assets/vectors/_.svg';
import theme from '../../theme';

export interface BtnTwitterProps {
  property1: BtnTwitterProperty1;
}

export enum BtnTwitterProperty1 {
  Default = 'Default',
  Hover = 'hover',
}

export function BtnTwitter(props: BtnTwitterProps) {
  return (
    <View style={styles.root}>
      <_/>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    width: 32,
    height: 32,
    flexShrink: 0,
  },
});

