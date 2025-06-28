import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import CustomText from './CustomText';

const CustomInput = ({
  label,
  value,
  onChangeText,
  secureTextEntry,
  keyboardType,
  leftIcon,
  rightIcon,
  placeholder,
  ...rest
}) => {
  return (
    <View style={styles.wrapper}>
      {label && <CustomText style={styles.label}>{label}</CustomText>}
      <View style={styles.inputContainer}>
        {leftIcon && <View style={styles.icon}>{leftIcon}</View>}
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          {...rest}
        />
        {rightIcon && <View style={styles.icon}>{rightIcon}</View>}
      </View>
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    marginBottom: 6,
    color: '#333',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f1f1f1',
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 48,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  icon: {
    marginHorizontal: 4,
  },
});
