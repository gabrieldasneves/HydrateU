import { StyleSheet, Text, View } from "react-native";
import theme from "../../theme";

export function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Stay healthy</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 300,
    justifyContent: "flex-start",
    marginTop: 74,
  },
  headerText: {
    fontFamily: theme.FONT_FAMILY.BOLD,
    fontSize: theme.FONT_SIZE.LG,
    color: theme.COLORS.GRAY_100,
  },
});
