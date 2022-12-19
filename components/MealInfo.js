import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const MealInfo = ({
  duration,
  complexity,
  affordability,
  textStyle,
}) => {
  return (
    <View style={styles.details}>
      <Text style={[styles.detailsItem, textStyle]}>{duration}m</Text>
      <Text style={[styles.detailsItem, textStyle]}>{complexity.toUpperCase()}</Text>
      <Text style={[styles.detailsItem, textStyle]}>{affordability.toUpperCase()}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  detailsItem: {
    marginHorizontal: 4,
    alignItems: "center",
  },
});
