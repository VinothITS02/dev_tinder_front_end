import { BASE_URL } from "./constant";
import { Alert } from "react-native";

export const POST_API = async (endURL, body) => {
    try {
        const response = await fetch(`${BASE_URL}/${endURL}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        });
        if (!response.ok) {
            Alert.alert('Something went wrong', json?.message);
            return;
        }
        const json = await response.json();
        return json;
    } catch (err) {
        console.log('Login error:', err.message);
        Alert.alert('Error', 'Something went wrong. Please try again.');
    }
};
