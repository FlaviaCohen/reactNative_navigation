import { FlatList, View, StyleSheet, SafeAreaView } from "react-native";
import { CATEGORIES } from "../data/mock";
import Tile from "../components/Tile";

// The navigation prop is obtained because this component is registered as a Screen
const Categories = ({ navigation }) => {
  const pressHandler = (item) => {
    navigation.navigate("Meals", {
      ...item.item,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={(item) => (
          <Tile
            color={item.item.color}
            title={item.item.title}
            onPress={() => pressHandler(item)}
          />
        )}
        numColumns={2}
      />
    </SafeAreaView>
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  list: {
    flex: 1,
    flexDirection: "row",
  },
});
