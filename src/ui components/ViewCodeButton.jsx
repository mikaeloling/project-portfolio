import {StyleSheet, View, Text} from 'react-native';
import Github from '../../assets/vectors/Github.svg';
import theme from '../../theme';

export interface ViewCodeButtonProps {
  property1: ViewCodeButtonProperty1;
}

export enum ViewCodeButtonProperty1 {
  Default = 'Default',
  Hover = 'hover',
}

export function ViewCodeButton(props: ViewCodeButtonProps) {
  const classes = {
    root: [
      styles.root,
      props.property1 === ViewCodeButtonProperty1.Hover && styles.rootProperty1Hover,
    ],
    viewTheCode: [
      styles.viewTheCode,
      props.property1 === ViewCodeButtonProperty1.Hover && styles.viewTheCodeProperty1Hover,
    ],
  };

  return (
    <View style={classes.root}>
      <Github/>
      <Text style={classes.viewTheCode}>
        View the code
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
    backgroundColor: '#EB5577',
  },
  github: {
    width: 48,
    height: 48,
  },
  viewTheCode: {
    color: '#333',
    fontFamily: 'Montserrat',
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 'normal',
  },
  viewTheCodeProperty1Hover: {
    color: '#FFF',
  },
});
