import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  Modal,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import FontAwesome icons
import Products, { Product } from '../../../../utility/data/products';
import colors from '../../../../utility/styles/colors';

interface CardMainProps {
  products: Product[];
}

const CardMain: React.FC<CardMainProps> = ({ products }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const onPressHandler = (product: Product) => {
    console.log('Selected Product Image:', product.image);
    setSelectedProduct(product);
    setModalVisible(true);
  };

  const renderProduct = ({ item }: { item: Product }) => (
    <TouchableOpacity style={styles.card} onPress={() => onPressHandler(item)}>
      <View style={styles.imageContainer}>
        <Image source={item.image} style={styles.image} />
      </View>
      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.secondName}>{item.secondName}</Text>
      <View style={styles.cardFooterContainer}>
        <Text style={styles.rating}>{item.rating}</Text>
        <Text style={styles.price}>${item.price}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={products}
        renderItem={renderProduct}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContainer}
        numColumns={2}
      />
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          {selectedProduct && (
            <SafeAreaView>
              <View style={styles.modalContent}>
                <View style={styles.navigationBar}>
                  <TouchableOpacity
                    onPress={() => setModalVisible(false)}
                    style={styles.backButton}
                  >
                    <Icon name="arrow-left" size={24} color="#000" />
                  </TouchableOpacity>
                </View>
                <View style={styles.imageContainer2}>
                  {/* Dynamically require the image */}
                  <Image
                    source={selectedProduct.image}
                    style={styles.image2}
                    resizeMode="contain" // Ensures the image fits within the container
                  />
                </View>
                <Text style={styles.title2}>
                  {selectedProduct.name} {selectedProduct.secondName}
                </Text>
                <Text style={styles.description}>
                  {selectedProduct.description}
                </Text>
                <Text style={styles.price2}>${selectedProduct.price}</Text>
              </View>
            </SafeAreaView>
          )}
        </View>
      </Modal>
    </View>
  );
};

export default CardMain;

const styles = StyleSheet.create({
  listContainer: {
    paddingHorizontal: 10,
  },
  noProductsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noProductsText: {
    fontSize: 18,
    color: '#888',
  },
  card: {
    backgroundColor: 'white',
    margin: 10,
    padding: 10,
    borderRadius: 10,
    width: '45%',
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowRadius: 9,
    elevation: 9,
    shadowOpacity: 1,
  },
  image: {
    width: '100%',
    height: 100,
    borderRadius: 10,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  title: {
    marginTop: 10,
    fontWeight: '600',
    fontFamily: 'Roboto-Bold',
    fontSize: 16,
    color: '#3c2f2f',
    textAlign: 'left',
  },
  rating: {
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 7,
  },
  secondName: {
    fontSize: 16,
    marginTop: 5,
    color: '#6a6a6a',
    fontFamily: 'Roboto-Regular',
  },
  starContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
    width: '50%',
    height: 20,
  },
  cardFooterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  price: {
    fontSize: 16,
    color: '#FFF',
    backgroundColor: colors.primary,
    lineHeight: 30,
    fontWeight: '600',
    fontFamily: 'Roboto-Bold',
    textAlign: 'left',
    paddingHorizontal: 7,
    borderRadius: 10,
  },
  imageContainer: {
    width: '90%',
    height: 106,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '100%',
    height: '100%',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  image2: {
    width: '100%', // Image takes full width of the container
    height: 300, // Adjusted height for better visibility
    borderRadius: 10,
    marginBottom: 20,
    resizeMode: 'contain', // Ensures the image fits within the container
  },
  title2: {
    fontSize: 25,
    lineHeight: 34,
    fontWeight: '600',
    fontFamily: 'Roboto-Bold',
    color: '#3c2f2f',
    textAlign: 'left',
  },
  description: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  price2: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  imageContainer2: {
    width: '100%', // Ensure the container takes the full width
    height: 300, // Set the height to match the image height
    justifyContent: 'center',
    alignItems: 'center',
  },
  navigationBar: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 20,
    height: 50,
    paddingHorizontal: 5, // Reduced padding to move the button left
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: -5, // Move the back button slightly to the left
  },
});
