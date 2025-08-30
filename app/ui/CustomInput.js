import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import CustomText from "./CustomText";

export default function CustomInput({
  label,
  value,
  onChangeText,
  keyboardType = "default",
  secureTextEntry = false,
  error,
}) {
  return (
    <View style={{ marginBottom: 16 }}>
      {label ? (
        <CustomText size={14} weight="600" style={styles.label}>
          {label}
        </CustomText>
      ) : null}

      <TextInput
        style={[styles.input, error && styles.inputError]}
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        placeholder={label}
        placeholderTextColor="#999"
      />

      {error ? (
        <CustomText size={12} color="red" style={styles.errorText}>
          {error}
        </CustomText>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    marginBottom: 6,
    color: "#333",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 14,
    backgroundColor: "#fff",
  },
  inputError: {
    borderColor: "red",
  },
  errorText: {
    marginTop: 4,
  },
});
