import React, { useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    Linking,
    SafeAreaView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useSelector } from 'react-redux';

const WelcomeScreen = ({ navigation }) => {
    const isLoggedIn = useSelector((store) => store.user?.isLoggedIn);
    console.log("isLoggedIn///////", isLoggedIn)
    useEffect(() => {
        if (isLoggedIn) {
            console.log("insdie")
            navigation.navigate("Login");
        }
    }, [])
    return (
        <LinearGradient
            colors={['#fd267d', '#ff6036']}
            style={styles.container}
        >
            <SafeAreaView style={styles.innerContainer}>
                <View style={styles.logoContainer}>
                    {/* <Image
            source={require('../assets/tinder-logo.png')} // Replace with your logo
            style={styles.logo}
            resizeMode="contain"
          /> */}
                </View>

                <Text style={styles.termsText}>
                    By tapping “Create account” or “Sign in”, you agree to our{' '}
                    <Text style={styles.link} onPress={() => Linking.openURL('https://tinder.com/terms')}>
                        Terms
                    </Text>
                    . Learn how we process your data in our{' '}
                    <Text style={styles.link} onPress={() => Linking.openURL('https://tinder.com/privacy')}>
                        Privacy Policy
                    </Text>{' '}
                    and{' '}
                    <Text style={styles.link} onPress={() => Linking.openURL('https://tinder.com/cookies')}>
                        Cookies Policy
                    </Text>
                    .
                </Text>

                <TouchableOpacity
                    style={styles.createButton}
                    onPress={() => navigation.navigate('Signup')}
                >
                    <Text style={styles.createButtonText}>CREATE ACCOUNT</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.signInButton}
                    onPress={() => navigation.navigate('Login')}
                >
                    <Text style={styles.signInButtonText}>SIGN IN</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.troubleButton}>
                    <Text style={styles.troubleText}>Trouble signing in?</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </LinearGradient>
    );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    innerContainer: {
        flex: 1,
        padding: 20,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    logoContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    logo: {
        width: 100,
        height: 100,
        tintColor: '#fff',
    },
    termsText: {
        fontSize: 12,
        color: '#fff',
        textAlign: 'center',
        marginBottom: 20,
        lineHeight: 18,
    },
    link: {
        textDecorationLine: 'underline',
        fontWeight: '600',
    },
    createButton: {
        backgroundColor: '#fff',
        borderRadius: 25,
        paddingVertical: 12,
        paddingHorizontal: 40,
        width: '100%',
        alignItems: 'center',
        marginBottom: 12,
    },
    createButtonText: {
        color: '#fd267d',
        fontWeight: 'bold',
        fontSize: 16,
    },
    signInButton: {
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 25,
        paddingVertical: 12,
        paddingHorizontal: 40,
        width: '100%',
        alignItems: 'center',
        marginBottom: 20,
    },
    signInButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
    troubleButton: {
        marginBottom: 20,
    },
    troubleText: {
        color: '#fff',
        fontSize: 14,
    },
});
