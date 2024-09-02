import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextStyle,
  ViewStyle,
} from 'react-native';
import colors from '../../../../utility/styles/colors';

interface OptionItemProps {
  label: string;
  isActive: boolean;
  onPress: () => void;
}

const OptionItem: React.FC<OptionItemProps> = ({
  label,
  isActive,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={[styles.rectangleView, isActive && styles.active]}>
        <Text style={[styles.label, isActive && styles.activeLabel]}>
          {label}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginRight: 10,
  } as ViewStyle,
  rectangleView: {
    borderRadius: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 50,
    shadowColor: 'transparent',
  } as ViewStyle,
  active: {
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowRadius: 18,
    elevation: 18,
    shadowOpacity: 1,
    backgroundColor: colors.primary,
  } as ViewStyle,
  label: {
    fontSize: 16,
    fontWeight: '500',
    fontFamily: 'Inter-Medium',
    color: '#6a6a6a',
  } as TextStyle,
  activeLabel: {
    color: '#fff',
  } as TextStyle,
});

export default OptionItem;
