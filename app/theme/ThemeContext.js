import React, { createContext, useReducer } from 'react';
import lightTheme from './light';
import darkTheme from './dark';

const ThemeContext = createContext();

const themeReducer = (state, action) => {
    switch (action.type) {
        case 'SET_LIGHT':
            return lightTheme;
        case 'SET_DARK':
            return darkTheme;
        default:
            return state;
    }
};

export const ThemeProvider = ({ children }) => {
    const [theme, dispatch] = useReducer(themeReducer, lightTheme);

    return (
        <ThemeContext.Provider value={{ theme, dispatch }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeContext;
