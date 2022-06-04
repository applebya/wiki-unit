import { StyleSheet, Text, View, TextInput } from "react-native";

export default ({ children }) => {
  return (
    <View style={styles.container}>
      <Text accessibilityRole="header" style={styles.header}>
        Wiki Unit
      </Text>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexGrow: 1,
    justifyContent: "center",
  },
  header: {
    alignItems: "center",
    fontSize: 24,
    marginBottom: 24,
  },
});
