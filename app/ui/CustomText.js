import React from 'react';
import { Text } from 'react-native';
import useTheme from '../theme/useTheme';

const CustomText = ({ children, size = 'base', weight = 'regular', color, style }) => {
  const { theme } = useTheme();
  console.log("theme", theme)
  return (
    <Text
      style={[
        {
          color: color || theme.colors.text,
          fontSize: theme.typography.sizes[size],
          fontFamily: theme.typography.fonts[weight],
        },
        style,
      ]}
    >
      {children}
    </Text>
  );
};

export default CustomText;
