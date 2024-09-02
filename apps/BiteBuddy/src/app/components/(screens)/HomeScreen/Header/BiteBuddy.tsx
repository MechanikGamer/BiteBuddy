import * as React from 'react';
import { Text, StyleSheet } from 'react-native';

const BiteBuddyText = () => {
  return <Text style={styles.bitebuddy}>BiteBuddy</Text>;
};

const styles = StyleSheet.create({
  bitebuddy: {
    fontSize: 45,
    lineHeight: 61,
    fontFamily: 'Lobster-Regular',
    color: '#3c2f2f',
    textAlign: 'left',
  },
});

export default BiteBuddyText;
