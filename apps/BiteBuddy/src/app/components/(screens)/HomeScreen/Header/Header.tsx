import { StyleSheet, View } from 'react-native';
import React from 'react';
import BiteBuddyText from './BiteBuddy';
import ProfilePhoto from './ProfilePhoto';
import OrderYourFavourite from './OrderYourFood';

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <BiteBuddyText />
        <OrderYourFavourite />
      </View>
      <ProfilePhoto />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 19,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
});
