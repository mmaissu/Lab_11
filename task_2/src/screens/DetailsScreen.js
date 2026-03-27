import { View, Text, StyleSheet, Platform, Button } from 'react-native';

/** Task 2: экран 2 + навигация назад + platform-specific оформление карточки */
export default function DetailsScreen({ navigation }) {
    return (
        <View style={styles.outer}>
            <View
                style={[
                    styles.card,
                    Platform.OS === 'ios'
                        ? styles.cardIOS
                        : Platform.OS === 'android'
                          ? styles.cardAndroid
                          : styles.cardDefault,
                ]}>
                <Text style={styles.title}>Экран деталей</Text>
                <Text style={styles.hint}>
                    {Platform.select({
                        ios: 'Тень и скругление в стиле iOS',
                        android: 'Elevation в стиле Material',
                        default: 'Универсальные стили',
                    })}
                </Text>
                <Button title="Назад" onPress={() => navigation.goBack()} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    outer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 24,
    },
    card: {
        width: '100%',
        maxWidth: 400,
        padding: 20,
        borderRadius: 12,
        backgroundColor: '#fff',
        alignItems: 'center',
        gap: 12,
    },
    cardIOS: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
    },
    cardAndroid: {
        elevation: 6,
    },
    cardDefault: {
        borderWidth: 1,
        borderColor: '#ddd',
    },
    title: {
        fontSize: 20,
        fontWeight: '600',
    },
    hint: {
        fontSize: 14,
        color: '#666',
        textAlign: 'center',
    },
});
