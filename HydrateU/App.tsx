import { StyleSheet, Text, View } from "react-native";
import Main from "./src/screens/main";
import theme from "./src/theme";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import { Loading } from "./src/components/Loading";

export default function App() {
  const [fonstLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });
  return (
    <View style={styles.container}>{fonstLoaded ? <Main /> : <Loading />}</View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.COLORS.GRAY_500,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 67,
    paddingTop: 57,
  },
});
