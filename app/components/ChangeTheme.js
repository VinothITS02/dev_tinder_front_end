import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import useTheme from '../theme/useTheme'
import CustomText from '../ui/CustomText';

const ChangeTheme = () => {
    const { theme, dispatch } = useTheme();

    return (
        <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
            <CustomText color={theme.colors.text}>Current Theme: {theme.mode}</CustomText>
            <Button title="Switch to Dark" onPress={() => dispatch({ type: 'SET_DARK' })} />
            <Button title="Switch to Light" onPress={() => dispatch({ type: 'SET_LIGHT' })} />
        </View>
    );
};

export default ChangeTheme;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
