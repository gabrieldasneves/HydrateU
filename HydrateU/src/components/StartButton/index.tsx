import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import theme from "../../theme";
import { AntDesign } from "@expo/vector-icons";
export function StartButton() {
  return (
    <View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Begin</Text>
        <AntDesign
          name="right"
          color={theme.COLORS.GRAY_500}
          size={theme.FONT_SIZE.MD}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    width: 300,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
    backgroundColor: theme.COLORS.BLUE,
    borderRadius: 6,
  },
  buttonText: {
    fontFamily: theme.FONT_FAMILY.REGULAR,
    fontSize: theme.FONT_SIZE.SM,
    color: theme.COLORS.GRAY_500,
  },
});
