import * as React from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import colors from '../../../../utility/styles/colors';

interface SearchInputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  onSettingsPress: () => void; // Handler for settings button press
}

const SearchInput: React.FC<SearchInputProps> = ({
  value,
  onChangeText,
  placeholder,
  onSettingsPress,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Image
          source={require('../../../../../../assets/icons/search.png')}
          style={styles.icon}
        />
        <TextInput
          style={styles.search}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor="#333"
        />
      </View>
      <TouchableOpacity onPress={onSettingsPress} style={styles.settingsButton}>
        <Image
          source={require('../../../../../../assets/icons/settings.png')}
          style={styles.settingsIcon}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'transparent',
    width: '100%',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 20,
    flex: 1,
    paddingHorizontal: 10,
    shadowColor: 'rgba(0, 0, 0, 0.15)',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 19,
    elevation: 19,
    shadowOpacity: 1,
  },
  search: {
    fontSize: 18,
    fontWeight: '500',
    fontFamily: 'Roboto-Medium',
    color: '#3c2f2f',
    textAlign: 'left',
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    color: '#000',
  },
  settingsButton: {
    marginLeft: 10,
    backgroundColor: colors.primary,
    borderRadius: 20,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  settingsIcon: {
    width: 24,
    height: 24,
    tintColor: '#fff',
  },
});

export default SearchInput;
