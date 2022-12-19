import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const Subtitle = ({ children }) => {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  subtitleContainer: {
    borderBottomWidth: 2,
    borderBottomColor: "#e2b497",
    padding: 6,
    marginHorizontal: 24,
    marginVertical: 4,
  },
  text: {
    color: "#e2b497",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
