import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Platform } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import DetailsScreen from './src/screens/DetailsScreen';

const Stack = createNativeStackNavigator();

/** Task 3: NavigationContainer, Stack.Navigator, screenOptions */
export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Home"
                screenOptions={{
                    headerStyle: {
                        backgroundColor: Platform.select({
                            ios: '#007bff',
                            android: '#0066cc',
                            default: '#007bff',
                        }),
                    },
                    headerTintColor: '#ffffff',
                    headerTitleStyle: {
                        fontWeight: '600',
                        fontSize: Platform.OS === 'ios' ? 17 : 20,
                    },
                    headerShadowVisible: Platform.OS !== 'android',
                    animation: Platform.OS === 'ios' ? 'default' : 'slide_from_right',
                }}>
                <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Каталог' }} />
                <Stack.Screen name="Details" component={DetailsScreen} options={{ title: 'Детали' }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
