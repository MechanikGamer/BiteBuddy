import * as React from 'react';
import { Image, StyleSheet } from 'react-native';

const StarIcon = () => {
  return (
    <Image
      style={styles.starIcon}
      resizeMode="cover"
      source={require('../../../../../../assets/images/star.png')}
    />
  );
};

const styles = StyleSheet.create({
  starIcon: {
    width: '20%',
    height: 20,
    overflow: 'hidden',
  },
});

export default StarIcon;
