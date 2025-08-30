import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import CustomText from "./CustomText";

export default function DatePickerField({ label, value, onChange, error }) {
  const [showPicker, setShowPicker] = useState(false);

  const handleDateChange = (event, selectedDate) => {
    setShowPicker(Platform.OS === "ios"); // keep open on iOS
    if (selectedDate) {
      onChange(selectedDate);
    }
  };

  return (
    <View style={{ marginBottom: 16 }}>
      {label ? (
        <CustomText size={14} weight="600" style={styles.label}>
          {label}
        </CustomText>
      ) : null}

      <TouchableOpacity
        style={[styles.input, error && styles.inputError]}
        onPress={() => setShowPicker(true)}
      >
        <CustomText color={value ? "#000" : "#999"}>
          {value ? new Date(value).toDateString() : "Select Date"}
        </CustomText>
      </TouchableOpacity>

      {showPicker && (
        <DateTimePicker
          value={value ? new Date(value) : new Date()}
          mode="date"
          display="default"
          onChange={handleDateChange}
        />
      )}

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
    paddingVertical: 14,
    backgroundColor: "#fff",
  },
  inputError: {
    borderColor: "red",
  },
  errorText: {
    marginTop: 4,
  },
});
