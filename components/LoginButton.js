import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

import colors from "../config/colors";

function LoginButton({ title, onPress, style }) {
  return (
    <TouchableOpacity
      style={[styles.login, style]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    login: {
        borderRadius: 25,
        backgroundColor: colors.lightblue,
        width: "50%",
        margin: "8%",
        alignItems: "center",
        alignSelf: "center",
        padding: 15,
      },
  text: {
    color: colors.white,
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});

export default LoginButton;