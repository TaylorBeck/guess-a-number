import React from 'react';
import { Text, StyleSheet } from 'react-native';

/* Example of default text styling component */
/* For an alternative approach, see ../constants/default-styles.js  */

const TitleText = props => (
  <Text style={{ ...styles.title, ...props.style }}>{props.children}</Text>
);

const styles = StyleSheet.create({
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 22
  }
});

export default TitleText;
