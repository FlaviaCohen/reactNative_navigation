import { StatusBar } from "expo-status-bar";
import { Text, Button } from "react-native";
import Categories from "./screens/Categories";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Meals from "./screens/Meals";
import Meal from "./screens/Meal";
import Favorites from "./screens/Favorites";
import { Ionicons } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const { Navigator, Screen } = Stack;

// Nested navigator
const DrawerNavigation = () => {
  const { Navigator, Screen } = Drawer;
  return (
    <Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#351401" },
        headerTintColor: "white",
        sceneContainerStyle: { backgroundColor: "#3f2f25" },
        drawerActiveTintColor: "#351401",
        drawerInactiveTintColor: "white",
        drawerActiveBackgroundColor: "#e2b497",
        drawerStyle: {
          backgroundColor: "#351401",
        },
      }}
    >
      <Screen
        name="Categories"
        component={Categories}
        options={{
          title: "All Categories",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="grid-outline" size={size} color={color} />
          ),
        }}
      />
      <Screen
        name="Favorites"
        component={Favorites}
        options={{
          title: "Favorites",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="star" size={size} color={color} />
          ),
        }}
      />
    </Navigator>
  );
};

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
            //component={Categories}
            component={DrawerNavigation}
            options={{
              //title: "All Categories",
              headerShown: false,
            }}
          />
          <Screen
            name="Meals"
            component={Meals} /* options={handleMealsOptions} */
          />
          <Screen
            name="Meal"
            component={Meal}
            options={{ title: "About this meal" }}
            // This way elements to header can be added but these can not interact with screen elements
            //options={{ headerRight: () => <Button title="Tap me!" /> }}
          />
        </Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
