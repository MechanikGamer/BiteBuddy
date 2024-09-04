import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  Dimensions,
  Modal,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Product } from '../../../../utility/data/products';
import colors from '../../../../utility/styles/colors';

const { width } = Dimensions.get('window');
const cardWidth = (width - 60) / 2;

interface CardMainProps {
  products: Product[];
}

const CardMain: React.FC<CardMainProps> = ({ products }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleProductPress = (product: Product) => {
    setSelectedProduct(product);
    setModalVisible(true);
  };

  const handleOnPressOrder = () => {
    setModalVisible(false);
    console.log('Order Now Pressed');
  };

  const renderProduct = ({ item }: { item: Product }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => handleProductPress(item)}
    >
      <View style={styles.imageContainer}>
        <Image source={item.image} style={styles.image} resizeMode="contain" />
      </View>
      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.secondName}>{item.secondName}</Text>
      <View style={styles.footerWrapper}>
        <View style={styles.ratingContainer}>
          <Icon name="star" size={16} color={colors.starColor} />
          <Text style={styles.rating}>{item.rating}</Text>
        </View>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>${item.price}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={products}
        renderItem={renderProduct}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={[styles.listContainer]}
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
                  <Image
                    source={selectedProduct.image}
                    style={styles.image2}
                    resizeMode="contain"
                  />
                </View>
                <Text style={styles.title2}>
                  {selectedProduct.name} {selectedProduct.secondName}
                </Text>
                <Text style={styles.description}>
                  {selectedProduct.description}
                </Text>

                {/* Footer Section */}
                <View style={styles.footerModalContainer}>
                  <View style={styles.priceContainer2}>
                    <Text style={styles.price2}>${selectedProduct.price}</Text>
                  </View>
                  <TouchableOpacity
                    onPress={handleOnPressOrder}
                    style={styles.primaryButtonWrapper}
                  >
                    <Text style={styles.primaryButtonText}>ORDER NOW</Text>
                  </TouchableOpacity>
                </View>
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
  card: {
    backgroundColor: 'white',
    margin: 10,
    padding: 10,
    borderRadius: 10,
    width: cardWidth,
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 9,
    elevation: 9,
    shadowOpacity: 1,
  },
  imageContainer: {
    width: '100%',
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer2: {
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  title: {
    marginTop: 10,
    fontWeight: '600',
    fontSize: 16,
    color: colors.textPrimary,
    textAlign: 'center',
  },
  secondName: {
    fontSize: 14,
    color: colors.textHelper,
    textAlign: 'center',
    marginTop: 5,
  },
  ratingContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
    marginLeft: 5,
  },
  rating: {
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 5,
    color: colors.textPrimary,
  },
  price: {
    fontSize: 16,
    color: colors.textWhite,
    fontWeight: '600',
    fontFamily: 'Roboto-Bold',
    padding: 5,
    borderRadius: 10,
    textAlign: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.mainBackground,
    borderRadius: 10,
    justifyContent: 'space-between',
  },
  image2: {
    width: '80%',
    height: 300,
    borderRadius: 10,
    marginBottom: 20,
    resizeMode: 'contain',
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
    color: colors.textHelper,
    marginBottom: 20,
    lineHeight: 27,
    fontFamily: 'Roboto-Regular',
    textAlign: 'left',
  },
  navigationBar: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 20,
    height: 50,
    paddingHorizontal: 5,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.backButtonBacground,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: -5,
  },
  footerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  priceContainer: {
    backgroundColor: colors.primary,
    padding: 5,
    borderRadius: 10,
  },
  priceContainer2: {
    backgroundColor: colors.primary,
    borderRadius: 20,
    maxWidth: 120,
    marginLeft: 0,
    height: 70,
  },
  price2: {
    borderRadius: 10,
    color: colors.textWhite,
    fontSize: 22,
    padding: 20,
    lineHeight: 30,
    fontWeight: '600',
    fontFamily: 'Roboto-Bold',
  },
  footerModalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    width: '100%',
  },
  primaryButtonWrapper: {
    backgroundColor: colors.textPrimary,
    paddingHorizontal: 30,
    paddingVertical: 20,
    height: 70,
    textAlign: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  primaryButtonText: {
    color: colors.textWhite,
    fontSize: 18,
    lineHeight: 24,
    fontWeight: '600',
    fontFamily: 'Inter-SemiBold',
    textAlign: 'center',
  },
});
