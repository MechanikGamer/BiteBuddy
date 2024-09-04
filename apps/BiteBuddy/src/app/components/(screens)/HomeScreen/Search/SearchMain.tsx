import { StyleSheet, View } from 'react-native';
import React from 'react';
import SearchInput from './SearchInput';

const SearchMain: React.FC<{
  searchText: string;
  onSearch: (text: string) => void;
}> = ({ searchText, onSearch }) => {
  return (
    <View style={styles.container}>
      <SearchInput
        value={searchText}
        onChangeText={onSearch}
        placeholder="Search"
        onSettingsPress={() => console.log('Settings pressed')}
      />
    </View>
  );
};

export default SearchMain;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 19,
  },
});
