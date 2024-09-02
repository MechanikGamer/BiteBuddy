import { StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import SearchInput from './SearchInput';

const SearchMain: React.FC<{ onSearch: (text: string) => void }> = ({
  onSearch,
}) => {
  const [searchText, setSearchText] = useState('');

  const handleSearchChange = (text: string) => {
    setSearchText(text);
    onSearch(text);
  };

  return (
    <View style={styles.container}>
      <SearchInput
        value={searchText}
        onChangeText={handleSearchChange}
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
