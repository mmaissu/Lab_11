import { View, Text, Button, StyleSheet, Platform } from 'react-native';

/** Task 2: экран 1 + навигация на Details + platform-specific стили */
export default function HomeScreen({ navigation }) {
    return (
        <View
            style={[
                styles.container,
                Platform.select({
                    ios: styles.containerIOS,
                    android: styles.containerAndroid,
                    default: {},
                }),
            ]}>
            <Text style={styles.label}>
                {Platform.select({
                    ios: 'Главная (iOS)',
                    android: 'Главная (Android)',
                    web: 'Главная (Web)',
                    default: 'Главная страница',
                })}
            </Text>
            <Button title="Перейти к деталям" onPress={() => navigation.navigate('Details')} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 24,
    },
    containerIOS: {
        paddingTop: 8,
    },
    containerAndroid: {
        paddingTop: 16,
    },
    label: {
        marginBottom: 16,
        fontSize: 18,
    },
});
