import { Image, StyleSheet, View } from 'react-native';
import React from 'react';

const ProfilePhoto = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image8Icon}
        resizeMode="cover"
        source={require('../../../../../../assets/images/image8.jpeg')}
      />
    </View>
  );
};

export default ProfilePhoto;

const styles = StyleSheet.create({
  container: {
    width: '20%', // Adjust according to your layout
    height: 73, // Ensure the container has a defined height
    borderRadius: 100,
    overflow: 'hidden',
  },
  image8Icon: {
    width: '100%',
    height: '100%', // Set height to match the container's height
  },
});
