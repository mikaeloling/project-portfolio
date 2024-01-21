import {StyleSheet, View} from 'react-native';
import _ from '../../assets/vectors/_.svg';
import theme from '../../theme';

export interface BtnLinkedinProps {
  property1: BtnLinkedinProperty1;
}

export enum BtnLinkedinProperty1 {
  Default = 'Default',
  Hover = 'hover',
}

export function BtnLinkedin(props: BtnLinkedinProps) {
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
