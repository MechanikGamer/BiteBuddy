import React, { useState } from 'react';
import { FlatList, StyleSheet, View, ListRenderItem } from 'react-native';
import OptionItem from './OptionItem';

interface Option {
  label: string;
  category?: number;
}

const options: Option[] = [
  { label: 'All' },
  { label: 'Combos', category: 1 },
  { label: 'Sliders', category: 2 },
  { label: 'Classics', category: 3 },
];

const OptionsList: React.FC<{ onSelect: (category?: number) => void }> = ({
  onSelect,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePress = (index: number, category?: number) => {
    setActiveIndex(index);
    onSelect(category);
  };

  const renderItem: ListRenderItem<Option> = ({ item, index }) => (
    <OptionItem
      label={item.label}
      isActive={index === activeIndex}
      onPress={() => handlePress(index, item.category)}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={options}
        renderItem={renderItem}
        keyExtractor={(item) => item.label}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
  },
  listContainer: {
    paddingHorizontal: 10,
    marginVertical: 10,
  },
});

export default OptionsList;
