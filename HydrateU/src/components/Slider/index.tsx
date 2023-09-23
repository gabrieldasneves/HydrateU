import { StyleSheet, Text, View } from "react-native";
import theme from "../../theme";
import Slider from "@react-native-community/slider";
import { Dispatch, SetStateAction } from "react";

type Props = {
  title: string;
  setValue: Dispatch<SetStateAction<number>>;
};

export function SliderComponent({ title, setValue }: Props) {
  return (
    <View>
      <Text style={styles.sliderTitle}>{title}</Text>
      <Slider
        style={{ width: 320 }}
        minimumValue={0}
        maximumValue={10000}
        minimumTrackTintColor={theme.COLORS.BLUE}
        maximumTrackTintColor={theme.COLORS.GRAY_200}
        thumbTintColor={theme.COLORS.BLUE}
        onValueChange={setValue}
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
