import React from 'react';
import { Text, StyleSheet } from 'react-native';

const CustomText = ({
  children,
  color = '#222',
  size = 16,
  weight = 'normal',
  style = {},
  numberOfLines,
  align = 'left',
  ...props
}) => {
  return (
    <Text
      numberOfLines={numberOfLines}
      style={[
        styles.text,
        {
          color,
          fontSize: size,
          fontWeight: weight,
          textAlign: align,
        },
        style,
      ]}
      {...props}
    >
      {children}
    </Text>
  );
};

export default CustomText;

const styles = StyleSheet.create({
  text: {
    fontFamily: Platform.select({
      ios: 'System',
      android: 'sans-serif',
    }),
  },
});
