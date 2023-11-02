import { View, Text, StyleSheet } from "react-native";

const List = ({ data }) => {
  return data.map((item) => (
    <View style={styles.item}>
      <Text key={item} style={styles.text}>
        {item}
      </Text>
    </View>
  ));
};

export default List;

const styles = StyleSheet.create({
  item: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: "#e2b497",
  },
  text: {
    color: "#351401",
    textAlign: "center",
  },
});
