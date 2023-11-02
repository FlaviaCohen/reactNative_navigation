import { useLayoutEffect } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { CATEGORIES, MEALS } from "../data/mock";
import MealItem from "../components/MealItem";
// The navigation and route props are obtained because this component is registered as a Screen, the other way to obtain the route object is through useRoute hook, which is usefull for nested components that are not registered as screens
const Meals = ({ route, navigation }) => {
  const { id } = route.params;

  const displayedMeals = MEALS.filter((meal) => meal.categoryIds.includes(id));

  const mealsOptionsHandler = () => {
    navigation.setOptions({
      title: CATEGORIES.find((category) => category.id === id).title,
    });
  };

  useLayoutEffect(() => {
    mealsOptionsHandler();
  }, [id, navigation]);

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={(item) => <MealItem item={item} />}
      />
    </View>
  );
};

export default Meals;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
