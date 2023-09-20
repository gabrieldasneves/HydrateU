import { StyleSheet, Text, View } from "react-native";
import theme from "../../theme";
import { Card } from "../../components/Card";
import { StartButton } from "../../components/StartButton";
import { Header } from "../../components/Header";
import { SliderComponent } from "../../components/Slider";

export default function Main() {
  return (
    <View style={styles.container}>
      <View style={styles.headerComponent}>
        <Header />
      </View>
      <View style={styles.body}>
        <Card />
        <View style={styles.sliderGroup}>
          <SliderComponent title="ml per day" />
          <SliderComponent title="ml per timer" />
        </View>
        <StartButton />
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
  header: {
    color: theme.COLORS.GRAY_100,
  },
  headerComponent: {
    marginBottom: 64,
  },
  body: {
    alignItems: "center",
  },
  sliderGroup: {
    marginVertical: 27,
    gap: 27,
  },
});
