import { StatusBar } from "expo-status-bar";
import { Text, Button } from "react-native";
import Categories from "./screens/Categories";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Meals from "./screens/Meals";
import Meal from "./screens/Meal";

const Stack = createNativeStackNavigator();

const { Navigator, Screen } = Stack;

const App = () => {
  const [fontsLoaded] = useFonts({
    "sans-bold": require("./assets/fonts/PTSans-Bold.ttf"),
    "sans-regular": require("./assets/fonts/PTSans-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  // One way of setting screen options, the other one is in the "Meals" component
  /*   const mealsOptionsHandler = ({ route }) => {
    const { title } = route.params;
    return { title };
  }; */

  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#351401" },
            headerTintColor: "white",
            contentStyle: { backgroundColor: "#3f2f25" },
          }}
        >
          {/* First screen is used as the default */}
          <Screen
            name="MealsCategories"
            component={Categories}
            options={{
              title: "All Categories",
            }}
          />
          <Screen
            name="Meals"
            component={Meals} /* options={handleMealsOptions} */
          />
          <Screen
            name="Meal"
            component={Meal}
            // This way elements to header can be added but these can not interact with screen elements
            //options={{ headerRight: () => <Button title="Tap me!" /> }}
          />
        </Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
