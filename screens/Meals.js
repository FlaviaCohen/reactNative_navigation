import { useLayoutEffect } from "react";
import { CATEGORIES, MEALS } from "../data/mock";

import MealsList from "../components/MealsList/MealsList";
// The navigation and route props are obtained because this component is registered as a Screen, the other way to obtain the route object is through useRoute hook, which is usefull for nested components that are not registered as screens
const Meals = ({ route, navigation }) => {
  const { id } = route.params;

  const displayedMeals = MEALS.filter((meal) =>
    meal.categoryIds.includes(id)
  ).map((meal) => meal.id);

  const mealsOptionsHandler = () => {
    navigation.setOptions({
      title: CATEGORIES.find((category) => category.id === id).title,
    });
  };

  useLayoutEffect(() => {
    mealsOptionsHandler();
  }, [id, navigation]);

  return <MealsList itemIds={displayedMeals} />;
};

export default Meals;
