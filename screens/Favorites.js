import { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import MealsList from "../components/MealsList/MealsList";
import { FavoritesContext } from "../store/context/favoritesContext";

const Favorites = () => {
  const { ids } = useContext(FavoritesContext);

  if (!ids.length) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>You have no favorite meals yet</Text>
      </View>
    );
  }
  return <MealsList itemIds={ids} />;
};

export default Favorites;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
