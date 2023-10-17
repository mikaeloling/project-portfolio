import {StyleSheet, View, Text} from 'react-native';
import LiveDemo from '../../assets/vectors/LiveDemo.svg';
import theme from '../../theme';

export interface LiveDemoButtonProps {
  property1: LiveDemoButtonProperty1;
}

export enum LiveDemoButtonProperty1 {
  Default = 'Default',
  Hover = 'hover',
}

export function LiveDemoButton(props: LiveDemoButtonProps) {
  const classes = {
    root: [
      styles.root,
      props.property1 === LiveDemoButtonProperty1.Hover && styles.rootProperty1Hover,
    ],
    liveDemo: [
      styles.liveDemo,
      props.property1 === LiveDemoButtonProperty1.Hover && styles.liveDemoProperty1Hover,
    ],
  };

  return (
    <View style={classes.root}>
      <LiveDemo/>
      <Text style={styles.liveDemo2}>
        Live demo
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    display: 'inline-flex',
    paddingRight: 0,
    alignItems: 'center',
    gap: 7,
    backgroundColor: '#F5F5F5',
    flexDirection: 'row',
    borderRadius: 40,
  },
  rootProperty1Hover: {
    backgroundColor: '#0B24F5',
  },
  liveDemo: {
    width: 48,
    height: 48,
  },
  liveDemoProperty1Hover: {
    color: '#FFF',
  },
  liveDemo2: {
    color: '#333',
    fontFamily: 'Montserrat',
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 'normal',
  },
});

