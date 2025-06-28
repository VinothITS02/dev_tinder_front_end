import React from 'react';
import { TextInput, StyleSheet, View, Platform } from 'react-native';
import CustomText from './CustomText';

const CustomInput = ({
  label,
  placeholder,
  value,
  onChangeText,
  secureTextEntry = false,
  keyboardType = 'default',
  autoCapitalize = 'none',
  editable = true,
  multiline = false,
  numberOfLines = 1,
  style = {},
  containerStyle = {},
  ...props
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      {label && <CustomText style={styles.label}>{label}</CustomText>}
      <TextInput
        style={[styles.input, multiline && styles.multiline, style]}
        placeholder={placeholder || label}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        autoCapitalize={autoCapitalize}
        editable={editable}
        multiline={multiline}
        numberOfLines={numberOfLines}
        placeholderTextColor="#888"
        {...props}
      />
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  label: {
    marginBottom: 6,
    fontSize: 14,
    color: '#333',
    fontWeight: '500',
  },
  input: {
    height: 50,
    borderColor: '#aaa',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
    color: '#000',
  },
  multiline: {
    height: 100,
    paddingVertical: 10,
    textAlignVertical: 'top',
  },
});
