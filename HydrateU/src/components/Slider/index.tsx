import { StyleSheet, Text, View } from "react-native";
import theme from "../../theme";
import { useState } from "react";

export function SliderComponent() {
  const [sliderValue, setSliderValue] = useState(30);

  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
