import { StyleSheet, Text, View } from "react-native";
import theme from "../../theme";
import { Card } from "../../components/Card";
import { StartButton } from "../../components/StartButton";
import { Header } from "../../components/Header";
import { SliderComponent } from "../../components/Slider";
import { Timer } from "../../components/Timer";
import { useState } from "react";

export default function Main() {
  const [goal, setGoal] = useState(0);
  let formattedGoal = Math.round(goal);

  return (
    <View style={styles.container}>
      <View style={styles.headerComponent}>
        <Header />
      </View>
      <View style={styles.body}>
        <Card goal={formattedGoal} />
        <View style={styles.sliderGroup}>
          <SliderComponent title="ml per day" setValue={setGoal} />
        </View>
        <Timer />
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
