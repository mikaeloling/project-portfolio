import {StyleSheet, View} from 'react-native';
import _ from '../../assets/vectors/_.svg';
import theme from '../../theme';

export interface BtnGithubProps {
  property1: BtnGithubProperty1;
}

export enum BtnGithubProperty1 {
  Default = 'Default',
  Hover = 'hover',
}

export function BtnGithub(props: BtnGithubProps) {
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
