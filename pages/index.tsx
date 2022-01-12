import { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

export default function App(props) {
  const [startAmount, setStartAmount] = useState(0);

  return (
    <View style={styles.container}>
      <Text accessibilityRole="header" style={styles.text}>
        Wiki Unit
      </Text>

      <TextInput
        value={startAmount.toString()}
        onChangeText={(newAmount) => setStartAmount(Number(newAmount))}
      />

      <View style={styles.textContainer}>
        <Text accessibilityRole="header" aria-level="2" style={styles.text}>
          Subheader
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexGrow: 1,
    justifyContent: "center",
  },
  link: {
    color: "blue",
  },
  textContainer: {
    alignItems: "center",
    marginTop: 16,
  },
  text: {
    alignItems: "center",
    fontSize: 24,
    marginBottom: 24,
  },
});
