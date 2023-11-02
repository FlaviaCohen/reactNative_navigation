import { View, Text, StyleSheet } from "react-native";

const Details = ({ duration, complexity, affordability, style }) => {
  return (
    <View style={styles.details}>
      <Text style={[styles.detail, style]}>{duration}m</Text>
      <Text style={[styles.detail, style]}>{complexity.toUpperCase()}</Text>
      <Text style={[styles.detail, style]}>{affordability.toUpperCase()}</Text>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  detail: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});
