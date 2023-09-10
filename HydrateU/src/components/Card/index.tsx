import { StyleSheet, View } from "react-native";
import theme from "../../theme";

export function Card() {
  return (
    <View style={styles.container}>
      <View style={styles.card}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    backgroundColor: theme.COLORS.BLUE,
    borderRadius: 20,
    width: 208,
    height: 350,
  },
});
