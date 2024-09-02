import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import colors from '../../utility/styles/colors';
import Icon from 'react-native-vector-icons/FontAwesome5';

// Import your SVG icons
import HomeIcon from '../../utility/Icons/HomeIcon';
import ProfileIcon from '../../utility/Icons/UserIcon';
import SupportIcon from '../../utility/Icons/SupportIcon';
import BookmarkIcon from '../../utility/Icons/BookmarkIcon';

const CustomTabBar: React.FC<BottomTabBarProps> = ({
  state,
  descriptors,
  navigation,
}) => {
  const renderIcon = (routeName: string, isFocused: boolean) => {
    const color = isFocused ? '#fff' : '#dea09b';
    const iconSize = 24;

    switch (routeName) {
      case 'Home':
        return <HomeIcon width={iconSize} height={iconSize} fill={color} />;
      case 'Profile':
        return <ProfileIcon width={iconSize} height={iconSize} fill={color} />;
      case 'Add':
        return (
          <View style={styles.centerIconContainer}>
            <Icon name="plus" size={iconSize} color={color} />
            {isFocused && <View style={styles.iconIndicator} />}
          </View>
        );
      case 'Support':
        return <SupportIcon width={iconSize} height={iconSize} fill={color} />;
      case 'Bookmark':
        return <BookmarkIcon width={iconSize} height={iconSize} fill={color} />;
      default:
        return <HomeIcon width={iconSize} height={iconSize} fill={color} />;
    }
  };

  return (
    <View style={styles.tabBarContainer}>
      <View style={styles.tabBar}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={[
                styles.tabButton,
                route.name === 'Add' && styles.centerTabButton,
              ]}
              key={index}
            >
              {renderIcon(route.name, isFocused)}
              {isFocused && route.name !== 'Add' && (
                <View style={styles.iconIndicator} />
              )}
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tabBarContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  tabBar: {
    flexDirection: 'row',
    height: 70,
    width: '100%',
    backgroundColor: colors.primary,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    position: 'relative',
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  centerTabButton: {
    flex: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  centerIconContainer: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconIndicator: {
    position: 'absolute',
    bottom: -10,
    width: 6,
    height: 6,
    backgroundColor: 'white',
    borderRadius: 3,
  },
});

export default CustomTabBar;
