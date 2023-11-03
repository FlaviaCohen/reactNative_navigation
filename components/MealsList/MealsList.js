import { View, StyleSheet, FlatList } from "react-native";
import MealItem from "./MealItem";

const MealsList = ({ itemIds }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={itemIds}
        keyExtractor={(id) => id}
        renderItem={(item) => <MealItem itemId={item} />}
      />
    </View>
  );
};

export default MealsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
