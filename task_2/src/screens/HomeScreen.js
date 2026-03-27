import { View, Text, Button, StyleSheet } from 'react-native';
export default function HomeScreen({ navigation }) {
    return (
        <View style={{ 
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        }}>
                <Text>Главная страница</Text>
                <Button title="Перейти к деталям" onPress={() => navigation.navigate('Details')} />
        </View>        
    );
}