import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Button,
} from "react-native";
import { useLayoutEffect } from "react";
import Details from "../components/Details";
import Subtitle from "../components/Meal/Subtitle";
import List from "../components/Meal/List";
import IconButton from "../components/IconButton";

const Meal = ({ route, navigation }) => {
  const {
    affordability,
    complexity,
    duration,
    imageUrl,
    ingredients,
    steps,
    title,
  } = route.params.item;

  const pressHandler = () => {
    console.log("Pressed!");
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <IconButton onPress={pressHandler} icon="star" color="white" />
      ),
    });
  }, [navigation, pressHandler]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Details
        duration={duration}
        complexity={complexity}
        affordability={affordability}
        style={styles.detail}
      />
      <View style={styles.lists}>
        <Subtitle>Ingredients</Subtitle>
        <List data={ingredients} />
        <Subtitle>Steps</Subtitle>
        <List data={steps} />
      </View>
    </ScrollView>
  );
};

export default Meal;

const styles = StyleSheet.create({
  container: {
    marginBottom: 32,
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detail: {
    color: "white",
  },
  lists: {
    maxWidth: "80%",
  },
});
