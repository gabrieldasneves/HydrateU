import { StyleSheet, Text, View } from "react-native";
import theme from "../../theme";
import { Card } from "../../components/Card";
import { StartButton } from "../../components/StartButton";
import { Header } from "../../components/Header";
import { SliderComponent } from "../../components/Slider";

export default function Main() {
  return (
    <View style={styles.container}>
      <Header />
      <Card />
      <SliderComponent />
      <StartButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    color: theme.COLORS.GRAY_100,
  },
});
