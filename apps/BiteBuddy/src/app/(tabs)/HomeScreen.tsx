import React, { useState } from 'react';
import { SafeAreaView, View, StyleSheet, Text } from 'react-native';
import Header from '../components/(screens)/HomeScreen/Header/Header';
import SearchMain from '../components/(screens)/HomeScreen/Search/SearchMain';
import OptionsList from '../components/(screens)/HomeScreen/FlatList/OptionsList';
import CardMain from '../components/(screens)/HomeScreen/Card/CardMain';
import Products from '../utility/data/products';

function HomeScreen() {
  const [filteredProducts, setFilteredProducts] = useState(Products);
  const [searchText, setSearchText] = useState('');

  const handleCategorySelect = (category?: number) => {
    setSearchText('');
    const filtered = Products.filter((product) =>
      category !== undefined ? product.category === category : true
    );
    setFilteredProducts(filtered);
  };

  const handleSearch = (text: string) => {
    setSearchText(text);
    const filtered = Products.filter((product) =>
      product.name.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Header />
      </View>
      <View style={styles.searchContainer}>
        <SearchMain searchText={searchText} onSearch={handleSearch} />
        <OptionsList onSelect={handleCategorySelect} />
        <View style={styles.content}>
          {filteredProducts.length > 0 ? (
            <CardMain products={filteredProducts} />
          ) : (
            <Text style={styles.noProductsText}>No products found</Text>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {},
  searchContainer: {
    backgroundColor: '#f5f5f5',
    marginTop: 25,
    flex: 1,
  },
  content: {
    flex: 1,
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noProductsText: {
    fontSize: 18,
    color: '#888',
  },
});
