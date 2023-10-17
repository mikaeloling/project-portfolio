import {StyleSheet, View, Text} from 'react-native';
import Doc from '../../assets/vectors/Doc.svg';
import theme from '../../theme';

export interface ReadArticleProps {
  property1: ReadArticleProperty1;
}

export enum ReadArticleProperty1 {
  Hover = 'hover',
  Default = 'Default',
}

export function ReadArticle(props: ReadArticleProps) {
  const classes = {
    root: [
      styles.root,
      props.property1 === ReadArticleProperty1.Hover && styles.rootProperty1Hover,
    ],
    readArticle: [
      styles.readArticle,
      props.property1 === ReadArticleProperty1.Hover && styles.readArticleProperty1Hover,
    ],
  };

  return (
    <View style={classes.root}>
      <Doc/>
      <Text style={classes.readArticle}>
        Read article
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
    backgroundColor: '#FFF',
    flexDirection: 'row',
    borderRadius: 40,
  },
  rootProperty1Hover: {
    backgroundColor: '#FFD338',
  },
  doc: {
    width: 48,
    height: 48,
  },
  readArticle: {
    color: '#333',
    fontFamily: 'Montserrat',
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 'normal',
  },
  readArticleProperty1Hover: {
    color: '#000',
  },
});
