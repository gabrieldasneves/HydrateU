import { StyleSheet, Text, View } from "react-native";
import theme from "../../theme";

export function Timer() {
  return (
    <View style={styles.container}>
      <Text style={styles.numbers}>00</Text>
      <Text style={styles.text}>00</Text>
      <Text>:</Text>
      <Text style={styles.numbers}>01</Text>
      <Text style={styles.text}>00</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 27,
  },
  text: {
    color: theme.COLORS.GRAY_200,
  },
  numbers: { color: theme.COLORS.GRAY_100 },
});
