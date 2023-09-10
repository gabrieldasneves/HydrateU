import { Image, StyleSheet, Text, View } from "react-native";
import theme from "../../theme";
import waterImage from "../../../assets/water.png";

export function Card() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.upperHeader}>80%</Text>
        <Image source={waterImage} style={styles.image} />
        <View style={styles.underImageText}>
          <Text style={styles.header}>Drink Water</Text>
          <Text style={styles.subHeader}>goal: 3L</Text>
        </View>
      </View>
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
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 97.515,
    height: 151.219,
    marginBottom: 32,
  },
  underImageText: {
    alignItems: "center",
    gap: 5,
    marginBottom: 32,
  },
  subHeader: {
    fontFamily: theme.FONT_FAMILY.REGULAR,
    fontSize: theme.FONT_SIZE.SM,
    color: theme.COLORS.GRAY_500,
  },
  header: {
    fontFamily: theme.FONT_FAMILY.BOLD,
    fontSize: theme.FONT_SIZE.MD,
    color: theme.COLORS.GRAY_500,
  },
  upperHeader: {
    fontFamily: theme.FONT_FAMILY.BOLD,
    fontSize: theme.FONT_SIZE.SM,
    color: theme.COLORS.GRAY_500,
    marginBottom: 32,
  },
});
