import { StyleSheet, Text, View } from "react-native";
import theme from "../../theme";

export function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Stay hydrate!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 300,
    justifyContent: "flex-start",
  },
  headerText: {
    fontFamily: theme.FONT_FAMILY.BOLD,
    fontSize: theme.FONT_SIZE.LG,
    color: theme.COLORS.GRAY_100,
  },
});
