import { View, StyleSheet, Text, Pressable, Platform } from "react-native";
// import { useNavigation } from "@react-navigation/native";

const Tile = ({ color, title, onPress }) => {
  return (
    <View style={styles.container}>
      <Pressable
        android_ripple={styles.ripple}
        style={({ pressed }) => [
          styles.inner,
          { backgroundColor: color },
          pressed ? styles.pressed : null,
        ]}
        onPress={onPress}
      >
        <View>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default Tile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
    height: 150,
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  inner: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    color: "black",
    fontFamily: "sans-bold",
  },
  ripple: { color: "#fff" },
  pressed: {
    opacity: 0.5,
  },
});
