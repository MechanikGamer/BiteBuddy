import * as React from 'react';
import { Text, StyleSheet } from 'react-native';

const OrderYourFavourite = () => {
  return (
    <Text style={styles.orderYourFavourite}>Order your favourite food!</Text>
  );
};

const styles = StyleSheet.create({
  orderYourFavourite: {
    fontSize: 18,
    fontWeight: '500',
    fontFamily: 'Poppins-Medium',
    color: '#6a6a6a',
    textAlign: 'left',
  },
});

export default OrderYourFavourite;
