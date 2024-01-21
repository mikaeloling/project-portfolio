import {StyleSheet, View} from 'react-native';
import _ from '../../assets/vectors/_.svg';
import theme from '../../theme';

export interface BtnInstagramProps {
  property1: BtnInstagramProperty1;
}

export enum BtnInstagramProperty1 {
  Default = 'Default',
  Hover = 'hover',
}

export function BtnInstagram(props: BtnInstagramProps) {
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
