import React from 'react';
import { Text, StyleSheet } from 'react-native';

/* Example of default text styling component */
/* For an alternative approach, see ../constants/default-styles.js  */

const BodyText = props => <Text style={styles.body}>{props.children}</Text>

const styles = StyleSheet.create({
  body: {
    fontFamily: 'open-sans'
  }
});

export default BodyText;
