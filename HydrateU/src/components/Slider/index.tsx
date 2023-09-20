import { StyleSheet, Text, View } from "react-native";
import theme from "../../theme";
import Slider from "@react-native-community/slider";

type Props = {
  title: string;
};

export function SliderComponent({ title }: Props) {
  return (
    <View>
      <Text style={styles.sliderTitle}>{title}</Text>
      <Slider
        style={{ width: 320 }}
        minimumValue={0}
        maximumValue={1}
        minimumTrackTintColor={theme.COLORS.BLUE}
        maximumTrackTintColor={theme.COLORS.GRAY_200}
        thumbTintColor={theme.COLORS.BLUE}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  sliderTitle: {
    textAlign: "left",
    color: theme.COLORS.BLUE_DARK,
    marginBottom: 9,
  },
});
