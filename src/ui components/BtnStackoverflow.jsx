import {StyleSheet, View} from 'react-native';
import StackOverflow from '../../assets/vectors/StackOverflow.svg';
import theme from '../../theme';

export interface BtnStackoverflowProps {
  property1: BtnStackoverflowProperty1;
}

export enum BtnStackoverflowProperty1 {
  Default = 'Default',
  Hover = 'hover',
}

export function BtnStackoverflow(props: BtnStackoverflowProps) {
  return (
    <View style={styles.root}>
      <StackOverflow/>
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
