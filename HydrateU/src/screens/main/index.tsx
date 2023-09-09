import { StyleSheet, Text, View } from "react-native";
import theme from "../../theme";

export default function Main() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>oiOIOIO</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    color: theme.COLORS.GRAY_100,
  },
});
